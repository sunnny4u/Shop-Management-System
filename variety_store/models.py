from django.db import models

# Create your models here.
class CreateList(models.Model):
	name = models.CharField(max_length=50)
	mobile = models.CharField(max_length=15)
	jer = models.IntegerField(default=0)

	def __str__(self):
		return self.name

class SaveValueList(models.Model):
	baki = models.IntegerField(default=0)

	def __str__(self):
		return self.baki


