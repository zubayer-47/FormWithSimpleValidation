import React from "react";
import './Section.css';

const Section = ({heading, title}) => {
	return (
		<section className="section">
			<div className="h1">{heading}</div>
			<p>{title}</p>
		</section>
	);
};

Section.defaultProps = {
   heading: 'Step Two',
   title: 'Career Pathway'
}

export default Section;
