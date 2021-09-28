from django.urls import path, include
from . import views



urlpatterns = [
    path('users/profile/', views.getUserProfile,name="user-profile"),
    path('users/', views.getUsers,name="user"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_par'),
    path('', views.getRoutes, name="routes"),
    path('users/register/', views.registerUser,name='register'),
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>', views.getProduct, name="product"),
    path('articles/', views.getArticles, name="articles"),
    path('articles/<str:pk>', views.getArticle, name="article"),
    path('templates/', views.getTemplates, name="templates"),
    path('templates/<str:pk>', views.getTemplate, name="template"),
    path('events/', views.getEvents, name="events"),
    path('events/<str:pk>', views.getEvent, name="event"),
    path('exclusivecontents/', views.getExclusiveContents, name="exclusivecontents"),
    path('exclusivecontents/<str:pk>', views.getExclusiveContent, name="exclusivecontent"),
    

]