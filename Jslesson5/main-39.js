"use strict";
// 1//
const users = [
	{ name: `Alex`, age: 24, isAdmin: false },
	{ name: `Bob`, age: 13, isAdmin: false },
	{ name: `John`, age: 31, isAdmin: true },
	{ name: `Jane`, age: 20, isAdmin: false },
];

users.push(
	{ name: `Ann`, age: 19, isAdmin: false },
	{ name: `Jack`, age: 43, isAdmin: true },
);

console.log(users);

// 2//

function getUserAverageAge(users) {
	let sum = 0;
	for (let i = 0; i < users.length; i++) {
		sum += users[i].age;
	}
	return sum / users.length;
}
console.log(getUserAverageAge(users));

//3//
function getAllAdmins(users) {
	const admins = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin) {
			admins.push(users[i]);
		}
	}
	return admins;
}
console.log(getAllAdmins(users));

//4//
const numbers = [1, 2, 3, 4, 5];
function first(numbers, n) {
	if (n === undefined) {
		return numbers[0];
	} else if (n <= 0) {
		return [];
	}
	return numbers.slice(0, n);
}
console.log(first(numbers, 3));
console.log(first(numbers, 0));
console.log(first(numbers));
console.log(first(numbers, 10));
console.log(first(numbers, 1));
