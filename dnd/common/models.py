import re

from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.conf import settings

from django.db import models

class BaseModel(models.Model):
	"""Project Base model.

	Used to keep track of creation and update dates.
	"""

	created_at = models.DateTimeField(
		auto_now_add=True,
		null=True,
		blank=True)
	updated_at = models.DateTimeField(
		auto_now=True,
		null=True,
		blank=True)

	class Meta:  # NOQA
		abstract = True

class TaggedModelManager(models.Manager):
	"""Manager to get the tag using natural key."""

	def get_by_natural_key(self, tag):
		"""Get the tag using the natural key."""
		return self.get(tag=tag)


class TaggedModel(BaseModel):
	"""Tagged objects model.

	Keep track of models tags.
	"""

	tag = models.CharField(
		max_length=256,
		unique=True,
		null=False,
		blank=False)

	objects = TaggedModelManager()

	class Meta:  # NOQA
		abstract = True

	def save(self, *args, **kwargs):
		"""Save the object's tag."""
		self.clean()
		return super().save(*args, **kwargs)

	def clean(self):
		"""Check the object's tag."""
		pattern = re.compile('^[A-Z0-9][A-Z0-9_]*$')
		if not pattern.match(self.tag):
			raise ValidationError({'tag': "Invalid tag"})


class NamedModel(TaggedModel):
	"""Named objects model.

	Used to keep track of objects names.
	"""

	name = models.CharField(
		max_length=256,
		unique=True,
		blank=False)

	class Meta:  # NOQA
		abstract = True

	def __str__(self):  # NOQA
		return self.name

class Player(TaggedModel):
	"""Player model

	Used to store players in the game
	"""

	nickname = models.CharField(
		max_length=256,
		unique=True,
		blank=False
	)
	user = models.OneToOneField(
		User,
		on_delete=models.CASCADE
	)

	def __str__(self):  # NOQA
		return self.nickname
