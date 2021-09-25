from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .models import Article
from .models import Template
from .models import Event
from .models import ExclusiveContent

from .products import products
from .articles import articles
from .templates import templates


from .serializers import ProductSerializer
from .serializers import ArticleSerializer
from .serializers import TemplateSerializer
from .serializers import EventSerializer
from .serializers import ExclusiveContentSerializer


# Create your views here.

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