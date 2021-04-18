import React, { useState } from 'react';
import './bingo.css';
import { calculateWinner } from '../../helpers/helper';
import topicList from '../../helpers/topic-list';
import Board from '../Board/Board';

const Bingo = () => {
	const [squaresText, setSquaresText] = useState(topicList);

	const handleClick = (i) => {
		let items = [...squaresText];
		let item = items[i];
		item.clicked = !item.clicked;
		items[i] = item;
		setSquaresText(items);

		calculateWinner(squaresText);
	};

	return (
		<>
			<h1>React Bingo Game</h1>
			<Board squaresText={squaresText} onClick={handleClick} />
		</>
	);
};

export default Bingo;
