#!/usr/bin/env bash

scriptName=`basename "$0"`
scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

for path in $(find "$scriptDir" -mindepth 1 -maxdepth 1 -type d)
do
	if [[ -f "$path/requirements.pip" ]]
	then
		pip install -r "$path/requirements.pip"
	fi
done
