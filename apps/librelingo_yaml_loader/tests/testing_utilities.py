"""Contains utilities for tests of the librelingo_yaml_loader"""

import random


def get_some_int():
    """
    Returns some 'aleatory' non-negatve integer.
    It is NOT cryptographically-secure.
    """
    return random.randint(0, 1000)  # NOSONAR


def get_some_str():
    """
    Returns some 'aleatory' string.
    It is NOT cryptographically-secure.
    """
    return str(get_some_int())
