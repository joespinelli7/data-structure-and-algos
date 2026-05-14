// Directions:
// Given an integer, return an integer that is the reverse ordering of numbers.
//
// Examples:
// reverseInt(15) === 51;
// reverseInt(981) === 189;
// reverseInt(500) === 5;
// reverseInt(-15) === -51;
// reverseInt(-90) === -9;

// my solution:
function reverseInt(n) {
	const revNum = parseInt(n.toString().split('').reverse().join(''));

	if (n >= 0) {
		return revNum;
	} else {
		return -revNum
	}
}

// alt solution 1:
function reverseInt(n) {
	const reversed = n.toString().split('').reverse().join('');

	return parseInt(reversed) * Math.sign(n);
}

// modern AI solution:
// Modern style prefers arrow functions assigned to const, unless you have a good reason for hoisting or legacy compatibility.
const reverseInt = (n) => {
	const sign = Math.sign(n);
	// Convert to string, split, reverse, join; handle negatives
	const reversedStr = Math.abs(n).toString().split('').reverse().join('');
	return sign * Number(reversedStr);
};
