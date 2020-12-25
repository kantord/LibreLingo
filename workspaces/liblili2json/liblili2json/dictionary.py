
def define_words_in_sentence(course, sentence, reverse):
    return [define_word(course, word, reverse) for word in sentence.split()]


def get_dictionary_item(course, word, reverse):
    dictionary_item = list(
        filter(
            lambda item: item.word == word and item.reverse == reverse,
            course.dictionary))

    return dictionary_item[0] if dictionary_item else None


def define_word(course, word, reverse):
    dictionary_item = get_dictionary_item(course, word, reverse)
    if dictionary_item and dictionary_item.definition:
        return {
            "word": word,
            "definition": dictionary_item.definition
        }

    return {"word": word}
