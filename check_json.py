import json
import sys

if len(sys.argv) < 2:
	exit(1)

with open(sys.argv[1], "r") as f:
	data = json.loads(f.read())
	for type in data:
		for key, value in data[type].items():
			print(key, value)

