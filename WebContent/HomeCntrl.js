var app = angular.module('myApp', ['ngRoute','ngCookies','signmyApp','blogmyApp','forummyApp',])
.run(run)
app.config(function($routeProvider) {
  $routeProvider
  
  .when('/Home', {
	    templateUrl : 'html/Home.html',
	    controller  : 'LoginController',
	    controllerAs: 'vm'
	 })

   .when('/register', {
    templateUrl : 'html/Signup.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'LoginController',
    	controllerAs:'vm'

 })
 
  .when('/blog', {
    templateUrl : 'html/Blog.html',
    controller  : 'blogcntrl'
 })
 
  .when('/Forum', {
    templateUrl : 'html/Forum.html',
    controller  : 'forumcntrl'
 })
 	.when("/users",{
    	templateUrl: "html/Users.html",
    	controller:'userctrl'
    })
    
    .when("/myprofile",{
    	templateUrl: "html/Profile.html",
    	controller:'Registercontroller'
    })
    
    .when("/myfriends",{
    	templateUrl: "html/friend.html",
    	controller:'myfriendctrl'
    })
     .when("/newrequest",{
    	templateUrl: "html/request.html",
    	controller:'myfriendctrl'
    })
    
    .when('/chat', {
    templateUrl : 'html/Chat.html',
    controller  : 'chatController'
    	
    	
    	
 })
  
  .when('/individualForum', {
	    templateUrl : 'html/SingleForum.html',
	    controller  : 'commentctrl'
	 })
  .when("/jobs",{
  	templateUrl: "job.html",
  	controller: "jobctrl"
  });



  /*.otherwise({redirectTo: '/'});*/
  
  console.log("route");    });
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    $rootScope.currentuser = $cookieStore.get('currentuser') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

  
  
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/register','/Home','/jobs']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
          $location.path('/login');
      }
});
  
}
