import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';
import './App.css';

function App() {
	const myState = useSelector((state) => state.changeTheNumber);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>Increment/Decrement using React-Redux</h1>
			<button type="button" onClick={() => dispatch(increment())}>
				Increment
			</button>
			<button type="button" onClick={() => dispatch(decrement())}>
				Decrement
			</button>
			<input type="text" value={myState} />
		</div>
	);
}

export default App;
