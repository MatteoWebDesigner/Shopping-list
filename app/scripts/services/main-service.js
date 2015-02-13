angular
	.module('shopingCartApp')
	.service('mainService', function () {
		
		var products = [
			{
				name : 'laptop Lenovo',
				price : '167'
			}, {
				name : 'laptop Dell',
				price : '500'
			} , {
				name : 'mouse',
				price : '10'
			}
		];

		return products;
	});