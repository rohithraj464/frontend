/*var app = angular.module("myApp", []);

app.controller('SignupCtrl', function($scope) {
	console.log("hello from Signupcontroller");
      $scope.Name = "rajesh";
      $scope.Username= "rajesh";
  
});*/


var app = angular.module('signmyApp',[]);
app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8081/CollabServer/';

console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			password:$scope.password,
			address:$scope.address,
			mail: $scope.mail,
			mobile:$scope.mobile,
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
			$scope.dob='';
			$scope.mail='';
			$scope.mobile='';
			$scope.gender='';
			
		
		}).error(function(data,status,headers,config){
			alert("success");
		});
		
	};
	$scope.currentuser=function(){
		
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser'
		}).success(function(data,status,headers,config){
			$scope.oneuser=data;
			$scope.img = data.image
		})
	};
	$scope.uploadFile = function(files) {
	    var image = new FormData();
	    //Take the first selected file
	    image.append("file", files[0]);

	    $http.post(BASE_URL+'/imageUpload', image, {
	        withCredentials: true,
	        headers: {'Content-Type': undefined },
	        transformRequest: angular.identity
	    }).success(function(data, status, headers, config) {
			alert("success")
			 $scope.reloadPage = function()                                                
                   {
                     $window.location.reload();
                   }
			console.log(image)
		}).error(function(data, status, headers, config) {
			alert("error")
		});
	};
	    
	   $(function() {
			   console.log("edit")
			    $('#profile-image1').on('click', function() {
			        $('#profile-image-upload').click();
			    });
	});
}]);