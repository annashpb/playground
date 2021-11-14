import React, { useState, useEffect } from 'react';
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
	const [interval, setInterval] = useState(500);
	const [lightsOn, setLightsOn] = useState(true);	
	const [activeLight, setActiveLight] = useState(0);
	
	const [lightsOpacity, setLightsOpaciy] = useState(lightsOn ? '1' : '0.2');

	const switchLight = () => {
		setLightsOn(!lightsOn);
	};

	const timer = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('resolved')
			}, interval)
		})
	};

	const lightShow = async () => {
		if (lightsOn) {
			await timer();
			setActiveLight(activeLight === colors.length - 1 ? 0 :activeLight + 1);
		}
	};

	useEffect(() => {
		lightShow();
	});

	const changeInterval = e => {
		setInterval(e.target.value);
	}

	const changeOpacity = e => {
		setLightsOpaciy(e.target.value);
	}

	return (
		<>
			<ul className="lightens">
				{colors.map((color, i) => (
					<SingleLight
						key={i}
						initialColor={color}
						opacity={i === activeLight ? lightsOpacity : '0.1'}
					/>
				))}
			</ul>
			<div className="buttonsWrapper">
				<button type="button" onClick={switchLight} className="switchBtn">
					{`Switch ${lightsOn ? 'off' : 'on'}`}
				</button>
				<div className="interval">
					<label htmlFor="interval">Set interval (in milliseconds)</label>
					<input
						type="number"
						name="interval"
						value={interval}
						step="10"
						onChange={changeInterval}
						className="intervalInput"
					/>
				</div>
				<div className="interval">
					<label htmlFor="opacity">
						{`Lights opacity: ${lightsOpacity}`}
					</label>
					<input
						type="range"
						name="opacity"
						value={lightsOpacity}
						min="0.2"
						max="1"
						step="0.1"
						onChange={changeOpacity}
						className="opacityInput"
					/>
				</div>
			</div>
		</>
	)
}

export default Lights;