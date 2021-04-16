import React from "react";
import PropTypes from 'prop-types';

const RadioInput = ({ type, name, value, handler, error }) => (
	<>
		<input
			type={type}
			name={name}
			value={value}
			className='mr-2'
			onChange={handler}
		/>
		{value}
	</>
);

RadioInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired,
}

export default RadioInput;
