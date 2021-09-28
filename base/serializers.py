from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Product
from .models import Article
from .models import Template
from .models import Event
from .models import ExclusiveContent


class UserSerializer(serializers.ModelSerializer):
    name= serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        #fields='__all__'
        fields =['_id', 'username','name', 'isAdmin']

    def get__id(self,obj):
        return obj.id
    
    def get_name(self,obj):
        name = obj.email
        return name
    
    def get_isAdmin(self,obj):
        return obj.is_staff
    
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields =['_id', 'username','name', 'isAdmin', 'token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

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