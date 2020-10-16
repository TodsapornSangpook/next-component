import React from 'react';
// import { applyPolyfills, defineCustomElements } from 'ice-todo-list/loader';

// applyPolyfills().then(() => {
// 	defineCustomElements();
// });

const TestComponent = () => {
	return (
		<div>
			{/* <MyButton name='test'></MyButton> */}
			<my-component></my-component>
			<todo-list>ssdd</todo-list>
		</div>
	);
};

export default TestComponent;
