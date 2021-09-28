from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


from django.contrib.auth.models import User
from .models import Product
from .models import Article
from .models import Template
from .models import Event
from .models import ExclusiveContent

from .products import products
from .articles import articles
from .templates import templates
from django.contrib.auth.models import User

from .serializers import ProductSerializer, UserSerializer
from .serializers import ArticleSerializer
from .serializers import TemplateSerializer
from .serializers import EventSerializer
from .serializers import ExclusiveContentSerializer
from .serializers import UserSerializerWithToken
from django.contrib.auth.hashers import make_password
from rest_framework import status
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data =super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for key,value in serializer.items():
            data[key] = value

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):

    routes = ['/api/products/',
'/api/products/create/',

'/api/products/upload/',

'/api/products/<id>/rating/',

'/api/products/top/',
'/api/products/<id>/',

'/api/products/delete/<id>/',
'/api/products/delete/<update/<id>/',

'/api/articles/',
'/api/articles/create/',

'/api/articles/upload/',

'/api/articles/top/',
'/api/articles/<id>/',

'/api/articles/delete/<id>/',
'/api/articles/delete/<update/<id>/',

'/api/templates/',
'/api/templates/create/',

'/api/templates/upload/',

'/api/templates/<id>/rating/',

'/api/templates/top/',
'/api/templates/<id>/',

'/api/templates/delete/<id>/',
'/api/templates/delete/<update/<id>/',
    ]

    return Response(routes)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])

        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message={'detail': 'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def getArticles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getArticle(request, pk):
    article = Article.objects.get(_id=pk)
    serializer = ArticleSerializer(article, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def getTemplates(request):
    templates = Template.objects.all()
    serializer = TemplateSerializer(templates, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTemplate(request, pk):
    template = Template.objects.get(_id=pk)
    serializer = TemplateSerializer(template, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getEvent(request, pk):
    event = Event.objects.get(_id=pk)
    serializer = EventSerializer(event, many = False)
    return Response(serializer.data)


@api_view(['GET'])
def getExclusiveContents(request):
    exclusivecontents = ExclusiveContent.objects.all()
    serializer = ExclusiveContentSerializer(exclusivecontents, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getExclusiveContent(request, pk):
    exclusivecontent = ExclusiveContent.objects.get(_id=pk)
    serializer = ExclusiveContentSerializer(exclusivecontent, many = False)
    return Response(serializer.data)