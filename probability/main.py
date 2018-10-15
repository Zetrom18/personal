import json

with open('initial.json') as f:
    data = json.load(f)


# settings = json.loads(json.dumps(open("initial.json", "r").read()))

print(data)
