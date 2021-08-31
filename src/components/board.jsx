import React from 'react';
import Square from './square';

function Board(props) {
	const renderSquare = i => (
		<Square value={props.squares[i]} onClick={() => props.onClick(i)} />
	);

	return (
		<div>
			<h1>This is board component</h1>
		</div>
	);
}

export default Board;
