app.controller('userctrl',['$scope','$http',function($scope,$http){
	var BASE_URL = 'http://localhost:8081/CollabServer/';
	$scope.getAllUsers= function() {
		console.log("usersctrl")
		console.log("get all users")
		$http({
			method : 'GET',
			url : BASE_URL+'/users'
		}).success(function(data, status, headers, config) {
			$scope.users=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	
	$scope.sendrequest=function(fid){
		console.log('send');
		$http({
			method:'POST',
			url:BASE_URL+'/sendrequest/'+fid
			
		}).success(function(data,status,headers,config){
			
		}).error(function(data,status,headers,config){
			alert("Error");
		})
	}
}])