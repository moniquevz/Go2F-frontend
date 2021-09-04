from django.urls import path
from . import views


urlpatterns = [

    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>', views.getProduct, name="product"),
    path('articles/', views.getArticles, name="articles"),
    path('articles/<str:pk>', views.getArticle, name="article"),
    path('templates/', views.getTemplates, name="templates"),
    path('templates/<str:pk>', views.getTemplate, name="template"),
    

]