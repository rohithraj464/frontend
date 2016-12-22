var fapp = angular.module('forummyApp',[]);
fapp.controller('forumcntrl', [ '$scope', '$http','$location','$rootScope', function($scope, $http, $location, $rootScope) {
var BASE_URL = 'http://localhost:8081/CollabServer/';

$scope.getAllForum= function() {
console.log("get all forums")
$http({
method : 'GET',
url : BASE_URL+'/Forum'
}).success(function(data, status, headers, config) {
$scope.forums=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create forum")

$scope.forum = { 
id:$scope.id,
description : $scope.description,
userid:$scope.userid,
doc:$scope.doc,
topic:$scope.topic,
name : $scope.name,
} 
$http({
method : 'POST',
url : BASE_URL+'/CreateForum',
data : $scope.forum
}).success(function(data, status, headers, config) {
$scope.id='';
$scope.description='';
$scope.userid='';
$scope.doc='';
$scope.name='';
$scope.topic='';
$scope.getAllForum();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteforum=function(id){
$http({
method:'DELETE',
url:BASE_URL+'/DeleteForum/'+id
}).success(function(data,status,headers,config){
$scope.getAllForum();
})
};
$scope.editforum=function(id,name,topic,description){
$scope.id=id;
$scope.name=name;
$scope.topic=topic;
$scope.description=description;
}

$scope.getforum=function(id){
	
	console.log("iforum")
	$http({
		method: "GET",
		url:BASE_URL+'/individualForum/'+id,
	}).success(function(data,status,headers,config){
		$location.path('/individualForum');
		$rootScope.individualforums=data;
		console.log(data)
	}).error(function(data, status, headers, config) {
		alert("Error");
	});
}


}]);