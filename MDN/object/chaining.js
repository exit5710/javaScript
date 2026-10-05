'use strict';

{
	// https://ko.javascript.info/optional-chaining
	// C:/projects/development/javaScript/MDN/object/chaining.html

	fn_newLine('optional chaining');

	let user = {
		name: 'John',
		address: {
			street: '123 Main St',
			city: 'Anytown',
		},
	};
	console.log(user.address?.street);
	console.log(user.grade?.math);
}
