import React, { useRef, useEffect } from 'react';

const TestComponent = () => {
	const todoListRef = useRef(null);

	useEffect(() => {
		todoListRef.current.addEventListener('changeList', handleChangeTodo);
	}, [todoListRef]);

	const handleChangeTodo = (evt) => {
		console.log('change', evt);
	};
	return (
		<div>
			<my-component></my-component>
			<todo-list ref={todoListRef}></todo-list>
		</div>
	);
};

export default TestComponent;
