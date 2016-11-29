/*
var app = angular.module("myApp", []);
app.controller('Registercontroller', function($scope) {
   $scope.submit = function(){
      $scope.username = " ";
      $scope.password = " ";
      $scope.Email = " ";
      $scope.phone = " ";
   }
   
});*/

var app = angular.module('regapp',[]);

app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8081/CollabServer';

	console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			password:$scope.password,
			/*confirmpassword:$scope.confirmpassword,*/
			mail: $scope.mail,
			mobile:$scope.mobile,
			address:$scope.address,
			gender:$scope.gender,
			dob:$scope.dob,
	
			
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.password='';
			/*$scope.confirmpassword='';*/
			$scope.mail='';
			$scope.mobile='';
			$scope.address='';
			$scope.gender='';
			
			
		
		}).error(function(data,status,headers,config){
			alert("SUCCESS");
		});
	};
}]);