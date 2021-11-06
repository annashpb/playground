import React from 'react';
import './styles.css';

const SingleLight = ({ color, index, lightsOn }) => {
	const opacity = lightsOn ? '1' : '0.2';

	return (
		<li
			key={index}
			className="light"
			style={{
				background: color,
				boxShadow: `0 2px 10px ${color}`,
				opacity
			}}
		/>
	)
};

export default SingleLight;
