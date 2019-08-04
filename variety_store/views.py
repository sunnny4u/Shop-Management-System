from django.shortcuts import render,redirect
from variety_store.forms import Listform
from variety_store.models import CreateList
import datetime

# Create your views here.

def store(request):
	return render(request, 'home.html', {})

def c_list(request):
	if request.method == 'POST':
		form = Listform(request.POST or None)
		if form.is_valid():
			form.save()
		return redirect('c_list')
	else:
		all_info = CreateList.objects.all
		return render(request, 'customer_list.html', {'info':all_info})

def product_details(request):
	date = datetime.datetime.now()
	return render(request, 'product.html', {'date':date})
	

def name_delete(request, name_id):
	name = CreateList.objects.get(pk=name_id)
	name.delete()
	return redirect('c_list')

def name_edit(request, name_id):
	if request.method == 'POST':
		name = CreateList.objects.get(pk=name_id)
		form = Listform(request.POST or None, instance=name)
		if form.is_valid():
			form.save()

		return redirect('c_list')
	else:
		edit_obj = CreateList.objects.get(pk=name_id)
		return render(request, 'edit.html', {'edit_obj':edit_obj})


def name_render(request, name_id):
	render_name = CreateList.objects.get(pk=name_id)
	date = datetime.datetime.now()
	return render(request, 'product.html', {'render_name':render_name, 'date':date})