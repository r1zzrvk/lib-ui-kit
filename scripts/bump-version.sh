#!/usr/bin/env bash
set -euo pipefail

# Usage: ./bump-version.sh [major|minor|patch|<version>]
#
# Example:
#   ./bump-version.sh patch   # 1.0.0 → 1.0.1
#   ./bump-version.sh minor   # 1.0.1 → 1.1.0
#   ./bump-version.sh major   # 1.1.0 → 2.0.0
#   ./bump-version.sh 1.2.3   # принудительно в 1.2.3

if [ $# -ne 1 ]; then
  echo "Usage: $0 [major|minor|patch|<version>]"
  exit 1
fi

BUMP=$1

NEW_VERSION=$(npm version "$BUMP" --no-git-tag-version)

echo "✅ Bumped version → ${NEW_VERSION}"

git add package.json package-lock.json
git commit -m "chore(release): ${NEW_VERSION}"

git tag -a "${NEW_VERSION}" -m "Release ${NEW_VERSION}"

echo "✅ Committed and tagged ${NEW_VERSION}"
