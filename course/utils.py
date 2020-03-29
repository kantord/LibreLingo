import re

MATCH_NONWORD_CHARACTERS_BEGINNING = re.compile('^\\W+')
MATCH_NONWORD_CHARACTERS_END = re.compile('\\W+$')


def clean_word(word):
    return MATCH_NONWORD_CHARACTERS_BEGINNING.sub("", MATCH_NONWORD_CHARACTERS_END.sub("", word))
