var arrayTasks = {

	concat: function (arr1, arr2) {
		var concatted = arr1.concat(arr2);
		return concatted
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(2, 0, itemToAdd);
		return arr;
	},


	square: function (arr) {
		arr.forEach(function(element, index, array){
			array[index] = element* element;
		});
		return arr;
	},

	sum: function (arr) {
		// can't get reduce to work
		var total = 0;
		for (var num of arr){
			total += num;
		}
		return total;
	},

	findDuplicates: function (arr) {
    // stole this one from stackO because I couldn't work it out at all
		var result = [];

		arr.forEach(function(element, index) {

			if (arr.indexOf(element, index + 1) > -1) {

				if (result.indexOf(element) === -1) {
					result.push(element);
				}
			}
		});

		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for (var num of arr){
			if (num !== valueToRemove){
				newArray.push(num);
			}
		}
		return newArray;

	},

	findIndexesOf: function (arr, itemToFind) {
			var newArray = [];
			for (i = 0; i < arr.length; i++) {
				if (arr[i] === itemToFind) {
					newArray.push(i);
				}
			}
			return newArray;
		},

	sumOfAllEvenNumbersSquared: function (arr) {
		var newArray = [];
		for (number of arr) {
			if (number % 2 === 0) {
				newArray.push(number)
			}
		}
		var squaredArray = this.square(newArray);
		return this.sum(squaredArray);
	}
}

module.exports = arrayTasks
