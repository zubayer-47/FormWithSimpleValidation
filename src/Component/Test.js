import React, { Component } from "react";
class Test extends Component {
	render() {
		return (
			<input
				className="form-control my-3"
				type="textarea"
            name='description'
				value={this.props.description}
				onChange={this.props.handleChange}
			/>
		);
	}
}

export default Test;
