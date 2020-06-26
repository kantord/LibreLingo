import requests
import datetime
import json
from django.shortcuts import render
from django.http import HttpResponse
from django import forms
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings


class UserForm(forms.Form):
    username = forms.CharField(max_length=100, min_length=3)
    password = forms.CharField(max_length=100, min_length=6)
    email = forms.EmailField()


def respond(obj):
    return HttpResponse(json.dumps(obj))


def error(error_code, details=None):
    return {
        "code": error_code,
        "details": details
    }


def fail_with(failures):
    return respond({
        "success": False,
        "error": failures
    })


@csrf_exempt
def register(request):
    try:
        payload_string = request.body.decode()
        payload = json.loads(payload_string)
    except:
        return fail_with(error("could-not-parse-json-payload"))
    try:
        form = UserForm(payload)
    except:
        return fail_with(error("could-not-validate-payload"))
    if not form.is_valid():
        errors = {**{field.name: field.errors for field in form},
                  **{"_form": form.non_field_errors()}}
        return fail_with(error("invalid-payload", errors))
    data = form.cleaned_data
    couch_payload = {"name": data["username"], "password": data["password"], "email": data["email"], "created": datetime.datetime.now().isoformat(),
                     "roles": [], "type": "user"}
    try:
        headers = {'Content-Type': "application/json",
                   'Accept': "application/json"}
        response = requests.put(
            'https://sync.librelingo.app/_users/org.couchdb.user:' + data["username"], json=couch_payload, headers=headers, auth=(settings.COUCH_USER, settings.COUCH_PASS))
        response_data = response.json()
        if response.status_code == 201:
            return respond({
                "success": True,
            })
        else:
            if response_data["error"] == "conflict":
                return fail_with(error("invalid_payload", {"username": ["This username is taken"], "password": [], "email": [], "_form": []}))
            return fail_with(error("database-error", response_data))
    except Exception as server_error:
        return fail_with(error("server-error", str(server_error)))
