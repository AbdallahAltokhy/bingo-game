import React from 'react';
import Square from './Square';

const Board = ({ squaresText, onClick }) => (
	<div className="board">
		{squaresText.map((square, i) => (
			<Square key={i} value={square.value} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Board;
