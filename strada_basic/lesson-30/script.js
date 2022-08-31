// 1) We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

//     inBetween(a, b) – between a and b or equal to them (inclusively).
//     inArray([...]) – in the given array.

// The usage must be like this:

//     arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
//     arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].

function inBetween(rangeStart, rangeEnd) {
	return num => (num >= rangeStart && num <= rangeEnd ? true : false);
}

function inArray(arr) {
	return num => arr.includes(num);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];

console.log(arr1.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr1.filter(inArray([1, 2, 3, 10]))); // 1,2,3

// 2) We’ve got an array of objects to sort:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// The usual way to do that would be:

// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Can we make it even less verbose, like this?

// users.sort(byField('name'));
// users.sort(byField('age'));

// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.

let users = [
	{ name: 'John', age: 20, surname: 'Johnson' },
	{ name: 'Pete', age: 18, surname: 'Peterson' },
	{ name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(fieldName) {
	return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField('name'));

console.log(users);
