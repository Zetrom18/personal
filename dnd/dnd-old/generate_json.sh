#!/usr/bin/env bash

scriptDir="$(dirname "${BASH_SOURCE[0]}")"
infoDir="$scriptDir/info"
outFile="$scriptDir/teste.json"

echo "{" > $outFile
infoList=($(ls $infoDir))
for info in ${infoList[@]}
do
	echo "  \"$info\": {" >> $outFile
	fileList=($(ls $infoDir/$info))
	if [[ $info == "races" ]]
	then
		for file in ${fileList[@]}
		do
			echo "    \"$file\": {" >> $outFile
			while IFS= read -r line || [[ -n "$line" ]]
			do
				if [[ $(echo $line | sed 's/[^.]//g' | awk '{ print length }') > 1 ]]
				then
					tag=$(echo $line | cut -d'.' -f1)
					content=$(echo $line | cut -d'.' -f1 --complement | sed '$ s/^ //')
					echo "      \"$tag\": \"$content\"," >> $outFile
				fi
			done < $infoDir/$info/$file
			sed -i '$ s/.$//' $outFile
			if [[ $file == ${fileList[-1]} ]]
			then
				echo "    }" >> $outFile
			else
				echo "    }," >> $outFile
			fi
		done
	fi
	if [[ $info == "classes" ]]
	then
		for file in ${fileList[@]}
		do
			echo "    \"$file\": {" >> $outFile
			while IFS= read -r line || [[ -n "$line" ]]
			do
				if [[ $(echo $line | sed 's/[^.]//g' | awk '{ print length }') > 1 ]]
				then
					tag=$(echo $line | cut -d'.' -f1)
					content=$(echo $line | cut -d'.' -f1 --complement | sed '$ s/^ //')
					echo "      \"$tag\": \"$content\"," >> $outFile
				fi
			done < $infoDir/$info/$file
			sed -i '$ s/.$//' $outFile
			if [[ $file == ${fileList[-1]} ]]
			then
				echo "    }" >> $outFile
			else
				echo "    }," >> $outFile
			fi
		done
	fi
	if [[ $info == ${infoList[-1]} ]]
	then
		echo "  }" >> $outFile
	else
		echo "  }," >> $outFile
	fi
done
echo "}" >> $outFile

python3 check_json.py $outFile