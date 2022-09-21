#!/usr/bin/env bash

commitlintcmd=$(which commitlint)

if [ $? != 0 ]; then
  echo "Please Install commitlint"
  exit 1
fi

###################################
# Check the CGDP Repos last n commits
###################################

commitsToCheck=20

# temporarily check out the CGDP repo
tmpdir=`mktemp -d /tmp/git-tmp.XXXXXX` || exit 1
echo "temp dir: $tmpdir"

pushd "$tmpdir" || exit 1
git clone --depth=$commitsToCheck -n "https://github.com/NCIOCPL/cgov-digital-platform.git" .
popd

# Get log messages into an array to check
IFS='þ' read -r -d '' -a log_array <<< `git -C "$tmpdir" log --format=format:"%Bþ" -n $commitsToCheck --no-merges`
unset 'log_array[${#log_array[@]}-1]'

# Loop through and pass them in to commitlint
for i in "${log_array[@]}"
do
    echo "$i" | $commitlintcmd -g ./.github/workflows/commitlint.config.js
    if [ $? != 0 ]; then
      echo "Test failed."
    fi
done

# remove our temporary checkout
rm -rf "$tmpdir"

###################################
# Run some specific checks
###################################

for f in ./tests/*.txt
do
  cat "$f" | $commitlintcmd -g ./.github/workflows/commitlint.config.js
  if [ $? != 0 ]; then
    echo "Test $f failed."
  fi
done