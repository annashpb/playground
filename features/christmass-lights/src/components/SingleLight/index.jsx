import React, { useState } from 'react';
import './styles.css';

const SingleLight = ({ initialColor, opacity }) => {
	const [color, setColor] = useState(initialColor);

	const changeColor = e => {
		setColor(e.target.value);
	};

	return (
		<li
			className="lightWrapper"
			style={{ opacity }}
		>
			<span
				className="light"
				style={{
					background: color,
					boxShadow: `0 2px 10px ${color}`,
				}}
			/>
			<input
				type="color"
				value={color}
				onChange={changeColor}
			/>
		</li>
	)
};

export default SingleLight;
