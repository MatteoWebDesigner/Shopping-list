'use strict';

/**
 * @ngdoc function
 * @name shopingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shopingCartApp
 */
angular
	.module('shopingCartApp')
	.controller('MainCtrl', function ($scope, mainService) {
	    
	    $scope.shoppingList = mainService;

	    $scope.newItem = {
	    	name: '',
	    	price: ''
	    };

	    $scope.inputController = {
	    	label : 'Add'
	    }

	    function chooseLabel () {
	    	$scope.inputController.label = $scope.replace.active ? 'Replace' : 'Add';
	    }

	    $scope.replace = {
	    	active : false,
	    	$index: ''
	    }

	    $scope.add = function () {
	    	var newItem = $scope.newItem;

	    	if ($scope.replace.active) { // replace
	    		$scope.shoppingList[$scope.replace.$index] = newItem;
	    	} else { // add
	    		$scope.shoppingList.push(newItem);
	    	}
	    	
	    	reset();
	    };

	    $scope.edit = function ($index) {
		    var $shoppingList = $scope.shoppingList[$index];

		    $scope.newItem = {
		    	name: $shoppingList.name,
		    	price: $shoppingList.price
		    };

		    $scope.replace = {
		    	active : true,
		    	$index: $index
		    }
	    };

	    $scope.delete = function ($index) {
	    	$scope.shoppingList.splice($index,1);
	    };


	    function reset () {
		    $scope.newItem = {
		    	name: '',
		    	price: '',
	    		$index: ''
		    };

		    $scope.replace = {
		    	active : false,
		    	$index: ''
		    }
	    }

	    $scope.$watch('replace', function () {
	    	chooseLabel();
	    });
});
