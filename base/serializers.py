from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from .models import Article
from .models import Template


class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Article
        fields = '__all__'

class TemplateSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Template
        fields = '__all__'