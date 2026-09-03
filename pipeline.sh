#!/bin/bash

# Ensure exactly one argument is passed
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 [ON|OFF]"
    exit 1
fi

# Convert argument to uppercase for case-insensitive comparison
ARG=$(echo "$1" | tr '[:lower:]' '[:upper:]')

# Remove existing .github folder
if [ -d ".github" ]; then
    echo "Removing existing .github directory..."
    rm -rf .github
fi

# Create empty .github directory
mkdir -p .github

if [ "$ARG" = "ON" ]; then
    echo "Enabling: extracting .__tools__/enabled.zip to .github"
    TMP_DIR=$(mktemp -d)
    unzip -q .__tools__/enabled.zip -d "$TMP_DIR"
    mv "$TMP_DIR"/enabled/* .github/
    rm -rf "$TMP_DIR"
elif [ "$ARG" = "OFF" ]; then
    echo "Disabling: pipeline OFF — .github is now empty"
    # .github already exists (created above), leave it empty
else
    echo "Invalid argument. Please use 'ON' or 'OFF'."
    exit 1
fi

git add .github/
git commit -m "chore: pipeline $ARG"

echo "Operation complete."
