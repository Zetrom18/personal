from os import listdir
from os.path import isfile, join, dirname, realpath

class info(object):
	infoPath = join(dirname(realpath(__file__)), "info")

	def loadInfo(self):
		for type in [d for d in listdir(self.infoPath) if not isfile(join(self.infoPath, d))]:
			typeDir = join(self.infoPath, type)
			for info in [join(typeDir, f) for f in listdir(typeDir) if isfile(join(typeDir, f))]:
				# print(info)
				for line in open(info, "r", encoding='utf-8'):
					if len(line) == 1:
						continue
					print(line.split(".", 1)[0])

