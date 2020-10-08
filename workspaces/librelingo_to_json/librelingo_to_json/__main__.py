import sys

from librelingo_to_json.librelingo_to_json import fib

if __name__ == "__main__":
    n = int(sys.argv[1])
    print(fib(n))
