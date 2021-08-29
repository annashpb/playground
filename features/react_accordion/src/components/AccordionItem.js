import { useRef } from 'react';


const AccordionItem = ({ faq, isCollapsed, onToggle }) => {
	const answerWrapper = useRef();

	return (
		<li className={`accordion_item ${isCollapsed ? 'active' : ''}`}>
			<button type="button" className="question" onClick={onToggle}>
				<span>{faq.question}</span>
				<span className={`question_control  ${isCollapsed ? 'active' : ''}`} />
			</button>
			<div
				ref={answerWrapper}
				className="answer_wrapper"
				style={
					isCollapsed
						? { height: answerWrapper && answerWrapper.current && answerWrapper.current.scrollHeight }
						: { height: '0' }
				}
			>
				<p className="answer">{faq.answer}</p>
			</div>
		</li>
	);
};

export default AccordionItem;
