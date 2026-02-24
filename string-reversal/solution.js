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
