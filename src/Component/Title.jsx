import React, { Component } from "react";

class Title extends Component {
	render() {
		return (
			<div>
				<input
					className="form-control my-3"
					type="text"
					name="name"
					value={this.props.name}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

export default Title;
