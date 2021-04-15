import React from "react";
import PropTypes from 'prop-types';

const RadioInput = ({ type, name, value, handler, error }) => (
	<>
		<input
			type={type}
			name={name}
			value={value}
			className={ error ? 'mr-2 is-invalid' : 'mr-2' }
			onChange={handler}
		/>
		{value}
		{error && <div className="invalid-feedback">{error}</div>}
	</>
);

RadioInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired,
}

export default RadioInput;
