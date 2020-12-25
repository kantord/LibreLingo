import re


def clean_word(word):
    MATCH_NON_WORD_CHARACTERS_BEGINNING = re.compile("^[^\\w']+")
    MATCH_NON_WORD_CHARACTERS_END = re.compile("[^\\w']+$")
    return MATCH_NON_WORD_CHARACTERS_BEGINNING.sub(
        "", MATCH_NON_WORD_CHARACTERS_END.sub("", word))
