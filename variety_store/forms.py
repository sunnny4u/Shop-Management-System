from django import forms
from variety_store.models import CreateList,SaveValueList

class Listform(forms.ModelForm):
	class Meta:
		model = CreateList
		fields = ['name','mobile','jer']


class SaveValueForm(forms.ModelForm):
	class Meta:
		model = SaveValueList
		fields = ['baki']