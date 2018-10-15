import json
from .models import Competition, Team

with open('initial.json') as f:
	data = json.load(f)

models = []

comp = Competition(**data["COMPETITIONS"]["WORLDS"])

for tag, team in data["TEAMS"].items():
	print(tag, team)
	comp.addTeam(Team(**team))

models.append(comp)

print(models)
