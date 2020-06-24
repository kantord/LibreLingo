import datetime
import json
from django.shortcuts import render
from django.http import HttpResponse
from django import forms
from django.views.decorators.csrf import csrf_exempt


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
        "errors": failures
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
    now = datetime.datetime.now()
    return respond({
        "success": True,
    })
