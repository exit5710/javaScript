'use strict';

{
	// https://ko.javascript.info/symbol
	// C:/projects/development/javaScript/MDN/function/symbol.html

	fn_newLine('symbol');

	let age = Symbol("age");
	console.log(age.description);
	
	let user = {
		name: "John",
		address: "Seoul",
		[age]: 30,
	};

	let id = Symbol("id");
	user[id] = 1;
	console.log(user);

	id = Symbol("id");
	user[id] = 2;
	console.log(user);

	const symbols = Object.getOwnPropertySymbols(user);
	console.log('symbols:', symbols);
	console.log(user[symbols[2]]);

	for (let key in user) {
		console.log(key);
	}

	console.log(user[age]);

	let name = Symbol.for("name");
	let name2 = Symbol.for("name");
	console.log(name == name2);

	console.log(Symbol.keyFor(name));
}
