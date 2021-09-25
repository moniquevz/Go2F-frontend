from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from .models import Article
from .models import Template
from .models import Event
from .models import ExclusiveContent


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

class EventSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Event
        fields = '__all__'

class ExclusiveContentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ExclusiveContent
        fields = '__all__'