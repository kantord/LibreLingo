"""Contains utilities for tests of the librelingo_yaml_loader"""

import random


def get_some_int():
    """returns some 'aleatory' non-negatve integer"""
    return random.randint(0, 1000)


def get_some_str():
    """returns some 'aleatory' string"""
    return str(get_some_int())
