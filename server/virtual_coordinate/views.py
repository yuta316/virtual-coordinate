from django.shortcuts import render
from django.http import JsonResponse
from .models import MainCategory, SubCategory

class Category():
	def get_categories(request):
		response_data = {
					"main_cate": [],
					"sub_cate": [],
			}
		for obj in MainCategory.objects.all():
			response_data["main_cate"].append({
				"id": obj.id, "name": obj.name, "icon": obj.icon
			})
		for obj in SubCategory.objects.all():
			response_data["sub_cate"].append({
				"id": obj.id, "name": obj.name, "icon": obj.icon, "main_category_id": obj.main_category_id
			})
		return JsonResponse(response_data)
		
