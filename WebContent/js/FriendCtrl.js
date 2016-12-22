app.controller('myfriendctrl',['$scope','$http',function($scope,$http){
	var BASE_URL = 'http://localhost:8081/CollabServer/';
	console.log('request');
	$scope.getmyfriends=function(){
		$http({
			method : 'GET',
			url : BASE_URL+'/myfriends'
		}).success(function(data, status, headers, config) {
			$scope.myfriends=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	
	$scope.getsnewrequests=function(){
		console.log('newrequest');
		$http({
			method : 'GET',
			url : BASE_URL+'/newrequest'
		}).success(function(data, status, headers, config) {
			$scope.newrequest=data;
			//alert(data); 
			console.log('friend');
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	$scope.acceptfriend=function(fid){
		console.log(fid);
		$http({
			method : 'POST',
			url : BASE_URL+'/acceptfriend/'+fid
			
		});
		console.log('friendacceptation');
	}
	$scope.rejectfriend=function(fid){
		$http({
			method : 'POST',
			url : BASE_URL+'/rejectfriend/'+fid
		});
	}
}])