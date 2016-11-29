var app = angular.module('myApp', ['ngRoute','regapp']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'UI/Signup.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'UI/login.html',
    controller  : 'Logincontroller'
 })
 
  .when('/blog', {
    templateUrl : 'UI/blog.html',
    controller  : 'Blogcontroller'
 })
 
  .when('/forum', {
    templateUrl : 'UI/forum.html',
    controller  : 'Forumcontroller'
 })


  .otherwise({redirectTo: '/'});
});