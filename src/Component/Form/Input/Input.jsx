import React from "react";
import PropTypes from 'prop-types';

const Input = ({ label, type, name, placeholder, value, handler }) => (
	<div className="my-3">
		<label htmlFor={name}> {label} </label>
		<input
			type={type}
			name={name}
			id={name}
			className="form-control"
			placeholder={placeholder}
			value={value}
			onChange={handler}
		/>
	</div>
);

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired
}

export default Input;
