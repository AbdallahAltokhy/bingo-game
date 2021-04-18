import React from 'react';
import './board.css';
import Square from '../Square/Square';

const Board = ({ squaresText, onClick }) => (
	<div className="board">
		{squaresText.map((square, i) => (
			<Square
				key={i}
				value={square.value}
				clicked={square.clicked}
				onClick={() => onClick(i)}
			/>
		))}
	</div>
);

export default Board;
