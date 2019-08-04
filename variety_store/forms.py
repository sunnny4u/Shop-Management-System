from django import forms
from variety_store.models import CreateList

class Listform(forms.ModelForm):
	class Meta:
		model = CreateList
		fields = ['name','mobile']