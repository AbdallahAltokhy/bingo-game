import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import './bingo.css';
import { calculateWinner } from '../../helpers/calculateWinner';
import topicList from '../../helpers/topic-list';
import config from '../../helpers/confetti';
import Board from '../Board/Board';

const Bingo = () => {
	const [squaresText, setSquaresText] = useState(topicList);
	const [isMatch, setIsMatch] = useState(false);

	const handleClick = (i) => {
		//toggle the square state on click
		let items = [...squaresText];
		let item = items[i];
		item.clicked = !item.clicked;
		items[i] = item;
		setSquaresText(items);

		//check if there is a match
		let match = calculateWinner(squaresText);
		setIsMatch(match);
	};

	return (
		<>
			<h1>React Bingo Game</h1>
			<Confetti active={isMatch} config={config} />
			<Board squaresText={squaresText} onClick={handleClick} />
			<button onClick={() => (window.location = '/')} className="reset-btn">
				Reset
			</button>
		</>
	);
};

export default Bingo;
