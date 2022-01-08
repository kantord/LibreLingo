#!/usr/bin/env python
import argparse
import random

from librelingo_tools.lili import (  # type: ignore
    guess_path_to_course,
    collect_data,
    collect_words,
    collect_phrases,
)
from librelingo_yaml_loader.yaml_loader import load_course


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--course", help="path to course directory that contains the course.yaml"
    )
    # parser.add_argument(
    #    "--words",  help="teach words", action="store_true"
    # )
    # parser.add_argument(
    #    "--phrases",  help="teach phrases", action="store_true"
    # )
    args = parser.parse_args()
    return args


def check(translation, lookup, word):
    return translation.lower() in [wrd.lower() for wrd in lookup[word]]


def _show_banner():
    print("Type in the translation and press ENTER")
    print("If you don't know, just press ENTER")
    print("If you'd like to quite, press x and ENTER")
    print("Enjoy!")
    print()


def guess_word(mapper):
    words = list(mapper.keys())
    word = random.choice(words)
    translation = input(f"{word}: ")
    if translation == "x":
        return True
    match = check(translation, mapper, word)
    print("+" if match else "-")
    for trans in mapper[word]:
        print(f"   {trans}")
    if not match:
        translation = input("Try again: ")
        if translation == "x":
            return True
        match = check(translation, mapper, word)
        print("++" if match else "--")

    print()
    return False


def main():
    args = get_args()
    path_to_course = guess_path_to_course(args.course)
    course = load_course(path_to_course)
    target, source, _ = collect_data(course)
    _show_banner()

    # Randomly select a word or a phrase, show it, ask the user to type the answer, verify the answer

    challenges = {
        "source_to_target_word": [0.1, lambda: guess_word(source_to_target_words)],
        "target_to_source_word": [0.1, lambda: guess_word(target_to_source_words)],
        "source_to_target_phrases": [0.4, lambda: guess_word(source_to_target_phrases)],
        "target_to_source_phrases": [0.4, lambda: guess_word(target_to_source_phrases)],
    }
    challenges_list = list(challenges.keys())
    challenges_weights = [challenges[chlg][0] for chlg in challenges_list]

    source_to_target_words = collect_words(source, "source-to-target")
    target_to_source_words = collect_words(target, "target-to-source")
    target_to_source_phrases, source_to_target_phrases = collect_phrases(course)
    while True:
        choices = random.choices(challenges_list, weights=challenges_weights, k=1)
        for choice in choices:
            if challenges[choice][1]():
                return


if __name__ == "__main__":
    main()
