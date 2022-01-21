#!/usr/bin/env bash

set -euo pipefail

declare -i exit_code=0

if [[ $(basename "$PWD") != "LibreLingo" ]]; then
  printf "Start this script from the root directory of the project.\n"
  exit 2
fi

while IFS="" read -r cur_script
do
  printf "Checking \"%s\"\n" "${cur_script}"
    if ! shellcheck "$cur_script"; then
      exit_code=1
    fi
    if ! grep -q "set -euo pipefail" "$cur_script"; then
      printf "add \"set -euo pipefail\"\n"
      exit_code=1
    fi
done < <(find . -name "*.sh" -not -path "./node_modules/*")

exit "$exit_code"
