#!/bin/bash

DIRNAME=$(dirname "$0")
DEFAULT_OUTPUT_DIR="$DIRNAME/bin"
if [ -n "$1" ]; then
    WEBSITE_DIR="$1"
else
    echo "This script packs the LibreLingo website into a single executable file"
    echo "Usage: build.sh WEBSITE-DIR [OUTPUT-DIR]"
    echo "where:"
    echo "  WEBSITE-DIR is the directory which contains the files for the LibreLingo website"
    echo "  OUTPUT-DIR will contain the built executable binary files (optional; default: '$DEFAULT_OUTPUT_DIR')"
    exit 1
fi

OUTPUT_DIR=${2:-"$DEFAULT_OUTPUT_DIR"}
OUTPUT_DIR=$(readlink -f "$OUTPUT_DIR")

# Setup temporary build directory
BUILD_DIR=$(mktemp -d)
function cleanup {
    rm -rf "$BUILD_DIR"
}
trap cleanup EXIT

# copy the website files to the build directory
cp -r "$WEBSITE_DIR" "$BUILD_DIR/static"
# copy the go files to the build directory
cd "$DIRNAME"
cp -r ./* "$BUILD_DIR"

set -eux
cd "$BUILD_DIR"

# prepare pkger
go get github.com/markbates/pkger/cmd/pkger
PKGER="$(go env GOPATH)/bin/pkger"
"$PKGER" -include /static

# build go binaries
mkdir -p "$OUTPUT_DIR"
env CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o "$OUTPUT_DIR/librelingo-win-x86_64.exe" pkged.go main.go
env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o "$OUTPUT_DIR/librelingo-linux-x86_64" pkged.go main.go
env CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build -o "$OUTPUT_DIR/librelingo-darwin-x86_64" pkged.go main.go
