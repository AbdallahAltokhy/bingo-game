import React from 'react';
import Img from './img/giphy.gif';
import './square.css';

const Square = ({ value, clicked, onClick }) => {
	return value === '12' ? (
		<img className="img-gif" src={Img} alt="gif" />
	) : (
		<div className={clicked ? 'clicked' : 'not-clicked'} onClick={onClick}>
			<p className="square-txt">{value}</p>
		</div>
	);
};

export default Square;
