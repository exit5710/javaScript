'use strict';

{
	// https://ko.javascript.info/object-toprimitive
	// C:/projects/development/javaScript/MDN/object/primitive.html

	fn_newLine('primitive');

	let obj = {
		name: 'tom',
		age: 20
	};

	if (obj) {
		console.log('obj is true');
	}

	let user = {
		name: "John",
		money: 1000,
		
		[Symbol.toPrimitive](hint) {
			console.log(`hint: ${hint}`);
			return hint == "string" ? `{name: "${this.name}"}` : this.money;
		}
	};

	/*
	alert(user); // hint: string -> {name: "John"}
	alert(+user); // hint: number -> 1000
	alert(user + 500); // hint: default -> 1500
	*/
}