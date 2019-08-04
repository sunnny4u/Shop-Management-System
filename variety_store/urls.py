from django.urls import path, include
from variety_store import views
urlpatterns = [
    path('', views.store, name='store'),
    path('c_list', views.c_list, name='c_list'),
    path('details', views.product_details, name='p_details'),
    path('delete/<name_id>', views.name_delete, name='name_delete'),
    path('edit/<name_id>', views.name_edit, name='name_edit'),
    path('render/<name_id>', views.name_render, name='name_render'),
]
