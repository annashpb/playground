import React, { useState } from 'react';
import SingleLight from '../SingleLight';
import './styles.css';

const colors = [
	'#ff0000',
	'#ff9900',
	'#ffee00',
	'#00ff00',
	'#00ffff',
	'#0000ff',
	'#9900ff',
]

const Lights = () => {
	const [lightsOn, setLightsOn] = useState(true);
	const switchLight = () => {
		setLightsOn(!lightsOn);
	}
	return (
		<>
			<ul className="lightens">
				{colors.map((color, i) => (
					<SingleLight color={color} index={i} lightsOn={lightsOn} />
				))}
			</ul>
			<div className="buttonsWrapper">
				<button type="button" onClick={switchLight} className="switchBtn">
					{`Switch ${lightsOn ? 'off' : 'on'}`}
				</button>
			</div>
		</>
	)
}

export default Lights;