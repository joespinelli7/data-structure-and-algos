// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my solution:
function palindrome(str) {
	const revStr = initialStr.split('').reverse().join('');

	return str === revStr;
}

// my solution 2:
function palindrome(str) {
	if (typeof(str) == 'string') {
		const revStr = initialStr.split('').reverse().join('');

		return str === revStr;
	} else {
		alert("Please input strings only!")
	}
}

// alt solution 1:
function palindrome(str) {
	// using every function to check, it iterates over each value in an array and compares it to a specified value. If any value in array returns false,
	// the entire array returns false.
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	})
}

// modern AI solution:
function palindrome(str) {

}