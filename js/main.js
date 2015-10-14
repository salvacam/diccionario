var app = angular.module('traslate', []);
app.controller( "miappCtrl", function($scope, $http){
	
	$scope.limpia_esp = function(){
		$scope.espanol = "";
	};
	
	$scope.limpia_eng = function(){
		$scope.ingles = "";
	};
	
	$scope.disabled = "";
	$scope.spin = "";
	
	$scope.traduce = function(){
		console.log($scope.espanol);
		if ( $scope.espanol != "" && $scope.espanol != undefined) {
			$scope.disabled = "disabled";
			$scope.spin = "gly-spin";
			$http.get('./php/index.php?source=es&target=en&q='+$scope.espanol).
				success(function(datos){
					$scope.ingles = datos.translation;
					$scope.disabled = "";
					$scope.spin = "";
				});		
		}
		if ( $scope.ingles != "" && $scope.ingles != undefined) {
			$scope.disabled = "disabled";
			$scope.spin = "gly-spin";
			$http.get('./php/index.php?source=en&target=es&q='+$scope.ingles).
				success(function(datos){
					$scope.espanol = datos.translation;
					$scope.disabled = "";
					$scope.spin = "";
				});
		}
	};
	
});
