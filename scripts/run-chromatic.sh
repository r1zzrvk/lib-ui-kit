#!/usr/bin/env bash
set -e

ENV_FILE=".env.local"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ File $ENV_FILE not found in $(pwd)"
  exit 1
fi

set -o allexport
# shellcheck disable=SC1090
source "$ENV_FILE"
set +o allexport


if [[ -z "$CHROMATIC_PROJECT_TOKEN" ]]; then
  echo "❌ CHROMATIC_PROJECT_TOKEN is not set in $ENV_FILE"
  exit 1
fi

npx chromatic --project-token="$CHROMATIC_PROJECT_TOKEN"
echo "✅ Chromatic successfully run"
