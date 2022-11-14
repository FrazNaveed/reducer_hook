import React, { useReducer } from 'react';

function Counter() {
	const counterReducer = (state, action) => {
		if (action.type === 'Add') {
			return {
				count: state.count + 1,
			};
		}
		if (action.type === 'Subtract') {
			return {
				count: state.count - 1,
			};
		}
		return state;
	};

	const [state, dispatch] = useReducer(counterReducer, { count: 0 });
	return (
		<div className="App">
			<h3>State: {state.count}</h3>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: 'Add' });
				}}
			>
				Add
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: 'Subtract' });
				}}
			>
				Subtract
			</button>
		</div>
	);
}

export default Counter;
