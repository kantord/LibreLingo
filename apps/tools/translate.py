#!/usr/bin/env python

#import os
import sys
import re
#from collections import defaultdict
#from librelingo_yaml_loader.yaml_loader import load_course

def found(search_word, expressions):
    for expression in expressions:
        for word in re.split(r'[ .,]', expression):
            if search_word == word.lower():
                return True

    return False


def main():
    if len(sys.argv) != 2:
        sys.exit(f"Usage: {sys.argv[0]} WORD")

    # pylint complaiend
    # tools/translate.py:18:0: R0914: Too many local variables (19/15) (too-many-locals)
    # tools/translate.py:18:0: R0912: Too many branches (22/12) (too-many-branches)
    # so for now I comment this code out

    #course_path = 'course'
    #original_search_word = sys.argv[1]
    #search_word = original_search_word.lower()
    #course = load_course(course_path)
    #translations = defaultdict(list)
    #phrases = defaultdict(list)
    #for module in course.modules:
    #    for skill in module.skills:
    #        for left, right, _ in skill.dictionary:
    #            if left.lower() == search_word:
    #                for wrd in right:
    #                    translations[wrd].append(skill.filename)
    #        for word in skill.words:
    #            if found(search_word, word.in_source_language):
    #                for wrd in word.in_target_language:
    #                    translations[wrd].append(skill.filename)
    #            if found(search_word, word.in_target_language):
    #                for wrd in word.in_source_language:
    #                    translations[wrd].append(skill.filename)
    #                #translations[word.in_source_language].append(skill.filename)
    #                #pass

    #        for phrase in skill.phrases:
    #            #print(skill)
    #            #exit()
    #            for sentence in phrase.in_target_language:
    #                if found(search_word, [sentence]):
    #                    phrases[sentence].append({"filename": skill.filename, "translations": phrase.in_source_language})
    #            for sentence in phrase.in_source_language:
    #                if found(search_word, [sentence]):
    #                    phrases[sentence].append({"filename": skill.filename, "translations": phrase.in_target_language})



    #for expression in sorted(translations.keys()):
    #    for filename in translations[expression]:
    #        print(f"{expression:10}   {os.path.join(course_path, filename)}")

    #if phrases:
    #    print("--- Usage ---")
    #    for phrase in sorted(phrases.keys()):
    #        print(f"{phrase:40}")
    #        for exp in phrases[phrase]:
    #            for trans in exp['translations']:
    #                print(f"{' ' * 40}{trans}")
    #            print(f"{' ' * 40}{os.path.join(course_path, exp['filename'])}")

main()
