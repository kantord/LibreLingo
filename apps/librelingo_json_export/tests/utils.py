from enum import Enum
import random


class FakeLanguages(str, Enum):
    LANG_1 = "foo"
    LANG_2 = "bar"


def generate_random_int(number: int):
    return random.randint(0, number)
