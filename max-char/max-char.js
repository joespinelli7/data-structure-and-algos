// Directions:
// Given a string, return the character that is most commonly used in the string.
//
// Examples:
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution:
function maxChar(str) {
	const charArr = str.split('');
	const charObj = {};

	charArr.forEach(char => {
		let initialChar = char;
		let indexNum = 0;
		let charCounter = 1;
		charArr.forEach(char => {
			if (initialChar === char) {
				charObj[initialChar] = charCounter;
				charCounter++;
				indexNum++;
			}
		})
	})

	return Object.keys(charObj).reduce((num1, num2) => charObj[num1] > charObj[num2] ? num1 : num2);
}

// alt solution 1:
function maxChar(str) {
	const charMap = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	// With the for...in loop, the value we're iterating over (char) is the KEY from the object
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}
