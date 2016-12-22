//var app = angular.module('forummyApp',[]);
app.controller('commentctrl', [ '$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	var BASE_URL = 'http://localhost:8081/CollabServer/';
	$scope.iforum=$rootScope.individualforums;
	//console.log(individualforums)
	$scope.submit=function(id){
		$scope.forumcommet={
				commet:$scope.commet
		}
		$http({
			method:'POST',
			url:BASE_URL+'/commetforum/'+id ,
			data:$scope.forumcommet
		}).success(function(data, status, headers, config) {
			$scope.commet='';
		})
	}
	$scope.getcommet=function(id){
		$http({
			method:'GET',
			url:BASE_URL+'/getforumcommet/'+id
		}).success(function(data,status,headers,config){
			$scope.commets=data;
		})
	}
	$scope.getuser=function(id){
		$http({
			method: 'GET',
			url: BASE_URL+'/oneuser/'+id
		}).success(function(data,status,headers,config){
			$scope.users=data;
		})
	}
}])