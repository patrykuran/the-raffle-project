(function() {

	var btn = document.getElementById('getNumbers');
		output = document.getElementById('showNumbers');


	// pick a random number

	function getRandom(max, min) {

		return Math.round(Math.random() * (max - min) + min);
	}

	// add random numbers to an array

	function showRandomNumbers() {

		var numbers = [],
			random;

		for(var i = 0; i < 6; i++) {

			random = getRandom(1, 49);

			// check if a number was repeated 

			while(numbers.indexOf(random) !== -1) {

				random = getRandom(1, 49);
				console.log("Number " + random + " was repeated");

			}

			numbers.push(random);
		}

		// in HTML5 <output> has special method 'value'. first join the array, than split by comma and space

		output.value = numbers.join(', ');

	}

	btn.onclick = showRandomNumbers;
	
})();