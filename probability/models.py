class Team(object):
	def win(self, team):
		if team.tag not in self.history:
			self.newHistory(team)
		self.history[team.tag]["WIN"] += 1
		self.win += 1

	def lose(self, team):
		if team.tag in self.history:
			self.history.update(team)
		self.history[team.tag]["LOSS"] += 1
		self.loss += 1

	def newHistory(self, team):
		self.history.update({team.tag: {"WIN": 0, "LOSS": 0}})

	def hasHistory(self, team):
		if team.tag in self.history:
			return True
		return False

	def __init__(self, *args, **kwargs):
		self.args = args
		self.tag = kwargs["TAG"]
		self.name = kwargs["NAME"]
		self.win = kwargs["WIN"] if "WIN" in kwargs else 0
		self.loss = kwargs["LOSS"] if "LOSS" in kwargs else 0
		self.history = kwargs["HISTORY"] if "HISTORY" in kwargs else {}

class Group(object):
	def addTeam(self, team):
		self.teams.append(team)

	def __init__(self, *args, **kwargs):
		self.args = args
		self.teams = kwargs["TEAMS"] if "TEAMS" in kwargs else []

class Competition(object):
	def getTeam(self, tag):
		if tag in self.teams:
				return self.teams[tag]
		return None

	def addTeam(self, team, *group):
		if self.getTeam(team.tag) is not None:
			return False
		if group is not None:
			group.addTeam(team)
		self.teams.update({team.tag: team})
		self.size += 1
		return True

	def getGroup(self, tag):
		if tag in self.groups:
			return self.groups[tag]
		return None

	def addGroup(self, group):
		if self.getGroup(group.tag) is not None:
			return False
		self.groups.update({group.tag: group})
		return True

	def __init__(self, *args, **kwargs):
		self.args = args
		self.tag = kwargs["TAG"]
		self.name = kwargs["NAME"]
		self.long_name = kwargs["LONG_NAME"]
		self.group_size = kwargs["GROUP_SIZE"]
		self.seed = kwargs["SEED"]
		self.teams = kwargs["TEAMS"] if "TEAMS" in kwargs else {}
		self.size = kwargs["SIZE"] if "SIZE" in kwargs else 0
		self.groups = {} if self.group_size > 1 else self.teams

