import json
import sys

if len(sys.argv) < 2:
	exit(1)

with open(sys.argv[1], "r") as f:
	print(json.loads(f.read()))
