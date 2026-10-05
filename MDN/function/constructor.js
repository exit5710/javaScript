'use strict';

{
	// https://ko.javascript.info/constructor-new
	// C:/projects/development/javaScript/MDN/function/constructor.html

	fn_newLine('constructor');

	function User(name) {
		this.name = name;

		this.sayHi = function () {
			console.log('My name is: ' + this.name);
		}
	}

	const user = new User('John');
	user.sayHi();
}
