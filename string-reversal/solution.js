// Challenge:
// 	Given a string, return a new string with the reversed order of characters.
//
// 	Examples:
//
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'
// You should put your implementation into the reverse function that was defined for you below.  You don't need to call reverse yourself.  Example of what your completed code should look like:

// my solution:
function reverse(str) {
	return str.split('').reverse().join('');
}

// alt solution 1:
function reverse(str) {
	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
	}

	return reversed;
}

// modern AI solution:
function reverse(str) {
	// use spread operator b/c it handles surrogate pairs properly. That means:
	// Most common characters = 1 code unit (16 bits)
	// Some characters (like emojis, certain symbols, rare Asian characters) = 2 code units
	// Those 2 code units together are called a surrogate pair.
	return [...str].reverse().join('');
}