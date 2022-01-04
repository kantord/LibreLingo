#!/usr/bin/env python
import argparse
import random

from lili import guess_path_to_course, collect_data, collect_words
from librelingo_yaml_loader.yaml_loader import load_course


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--course", help="path to course directory that contains the course.yaml"
    )
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
    _, source, _ = collect_data(course)
    _show_banner()

    # Randomly select a word, show it, ask the user to type the answer, verify the answer
    # Same with phrases

    source_to_target_words = collect_words(source, "source-to-target")
    while True:
        if guess_word(source_to_target_words):
            break


if __name__ == "__main__":
    main()
