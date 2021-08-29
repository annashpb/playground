import { useState } from 'react';

import { faqs } from '../data';
import AccordionItem from './AccordionItem';

const Accordion = () => {
	const [clicked, setClicked] = useState(0);

	const handleToggle = index => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	}

	return (
		<ul className="accordion">
			{faqs.map((faq, i) => (
				<AccordionItem
					key={i}
					faq={faq}
					isCollapsed={i === clicked}
					onToggle={() => handleToggle(i)}
				/>
			))}
		</ul>
	);
};

export default Accordion;
