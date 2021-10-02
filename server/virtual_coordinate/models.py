from django.db import models

#ユーザー認証
from django.contrib.auth.models import User

class MainCategory(models.Model):
    name = models.CharField(max_length=30)
    icon = models.CharField(max_length=50)
    description = models.CharField(max_length=200,null=True)

class SubCategory(models.Model):
    name = models.CharField(max_length=30)
    icon = models.CharField(max_length=50)
    description = models.CharField(max_length=200,null=True)
    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE)
