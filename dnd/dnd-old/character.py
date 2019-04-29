import json
from abc import ABCMeta

class char():
    def save(self):
        with open(file,"w+") as f:
            f.write(json.dumps(self.info))

        nada = {
            "id": self.info['id'],
            "char_name": self.info['char_name'],
            "player_name": self.info['player_name'],
            "race": self.info['race'],
            "alignment": self.info['alignment'],
            "exp": self.info['exp'],
            "bg": self.info['bg'],
            "inspiration": self.info['inspiration'],
            "proficiency": self.info['proficiency'],
            "age": self.info['age'],
            "height": self.info['height'],
            "weight": self.info['weight'],
            "eyes": self.info['eyes'],
            "skin": self.info['skin'],
            "hair": self.info['hair'],
            "str": self.info['str'],
            "dex": self.info['dex'],
            "con": self.info['con'],
            "int": self.info['int'],
            "wis": self.info['wis'],
            "cha": self.info['cha'],
            "skills": self.info['skills'],
            "ac": self.info['ac'],
            "initiative": self.info['initiative'],
            "speed": self.info['speed'],
            "hp": self.info['hp'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
            "bg": self.info['bg'],
        }

    def load(self):
        with open(self.file,"r") as f:
            self.info = json.load(f.read())

    def __init__(self, id):
        if type(id) == type(0):
            charList.find(id=id)
        else:
            charList.find(name=id)


class charList():
    file = "char_list.json"

    def find(self,**kwargs):
        with open(self.file,"r") as f:
            self.info = json.load(f.read())

    def save(self):
        with open(self.file,"r") as f:
            self.info = json.load(f.read())

    def __init__(self):
        with open(self.file,"r") as f:
            self.info = json.load(f.read())

