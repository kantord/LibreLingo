from django.core.exceptions import ValidationError
import re
from spellchecker import SpellChecker

MATCH_NONWORD_CHARACTERS_BEGINNING = re.compile('^\\W+')
MATCH_NONWORD_CHARACTERS_END = re.compile('\\W+$')


def clean_word(word):
    return MATCH_NONWORD_CHARACTERS_BEGINNING.sub(
        "", MATCH_NONWORD_CHARACTERS_END.sub("", word))


def validate_spelling(string, language):
    spell = SpellChecker(language=language)
    misspelled = spell.unknown(string.split())
    print(misspelled)
    if misspelled:
        raise ValidationError(
            "The word '{}' is misspelled".format(misspelled.pop()))
