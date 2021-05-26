import React, { Component } from "react";
import Section from "../section/Section";
import "./Nav.css";

export default class Nav extends Component {
	state = {
		isChecked1: true,
		isChecked2: false,
	};

	handleCheckBox = (e) => {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	};

	contiHandler = () => {
		this.setState({
			isChecked1: false,
			isChecked2: true,
		});
	};

	prevHandler = () => {
		this.setState({
			isChecked1: true,
			isChecked2: false,
		});
	};

	randomHeading = () => {};

	render() {
		return (
			<div className="wrapper flex">
				<div>
					<div className="logo">LOGO</div>
					<div className="navContainer">
						<input
							name="isChecked1"
							type="checkbox"
							onChange={this.handleCheckBox}
							checked={this.state.isChecked1}
						/>
						<label>Step 1</label>
						<p>District Profile</p>
					</div>

					<div className="navContainer">
						<input
							type="checkbox"
							name="isChecked2"
							onChange={this.handleCheckBox}
							checked={this.state.isChecked2}
						/>
						<label>Step 2</label>
						<p>Personal Details</p>
					</div>

					{this.state.isChecked2 && (
						<button onClick={this.prevHandler}>Previous</button>
					)}
					<button onClick={this.contiHandler}>Continue</button>
				</div>
				{this.state.isChecked2 ? <Section /> : <Section heading="Step One" title="First Page"/>}
			</div>
		);
	}
}
