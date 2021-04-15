import React from "react";
import PropTypes from 'prop-types';

const Input = ({ label, type, name, placeholder, value, handler, error }) => (
	<div className="my-3">
		<label htmlFor={name}> {label} </label>
		<input
			type={type}
			name={name}
			id={name}
			className={ error ? 'form-control is-invalid' : 'form-control' }
			placeholder={placeholder}
			value={value}
			onChange={handler}
		/>
		{ error && <div className='invalid-feedback'> { error } </div> }
	</div>
);

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	// error: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired
}

export default Input;
