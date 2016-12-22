var app = angular.module('blogmyApp',[]);
app.controller('blogcntrl', [ '$scope', '$http', function($scope, $http) {
var BASE_URL = 'http://localhost:8081/CollabServer/';

$scope.getAllBlogs= function() {
console.log("get all blogs")
$http({
method : 'GET',
url : BASE_URL+'/blog'
}).success(function(data, status, headers, config) {
$scope.blogs=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create blog")

$scope.blog = { 
id:$scope.id,
tittle : $scope.tittle,
userid:$scope.userid,
username:$scope.username,
doc:$scope.doc,
content : $scope.content,
}
$http({
method : 'POST',
url : BASE_URL + '/createblog',
data : $scope.blog
}).success(function(data, status, headers, config) {
$scope.id='';
$scope.tittle='';
$scope.userid='';
$scope.username='';
$scope.doc='';
$scope.content='';
$scope.getAllBlogs();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteblog=function(id){
$http({
method:'DELETE',
url:BASE_URL+'/deleteblog/'+id
}).success(function(data,status,headers,config){
$scope.getAllBlogs();
})
};
$scope.editblog=function(id,tittle,content){
$scope.id=id;
$scope.tittle=tittle;
$scope.content=content;
}

$scope.like=function(id){
	console.log("inside like")
	$http({
		method : 'POST',
		url : BASE_URL + '/likeblog/'+id,
	}).success(function(data, status, headers, config) {
		alert("success")
	})
	
}
}]);