import React, { Component } from "react";
import Input from "./Input/Input";
import RadioInput from "./Input/RadioInput";

const initValues = {
	name: "",
	email: "",
	password: "",
	birthDate: "",
	gender: "",
};

class Form extends Component {
	state = {
		values: initValues,
		isChecked: false,
		errors: {},
	};

	handleChange = (event) => {
		this.setState({
			values: {
				...this.state.values,
				[event.target.name]: event.target.value
			}
		});
	};

	handleChecked = (event) => {
		this.setState({
			...this.state,
			isChecked: event.target.checked,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { isValid, errors } = this.validate();

		if (isValid) {
			this.props.createUser(this.state.values);

			event.target.reset();
			this.setState({
				values: initValues,
				isChecked: false,
			});
		} else {
			this.setState({
				errors,
			});
		}
	};

	validate = () => {
		const errors = {};
		const {
			values: { name, email, password, gender, birthDate },
		} = this.state;

		if (!name || name.length > 25) {
			errors.name = "Please Provide Your Name Within 25 Characters";
		}

		if (!email) {
			errors.email = "Please Provide Your Email";
		}

		if (!password || password.length < 8) {
			errors.password = "Please Provide Your Password Out of 8 Characters";
		}

		if (!birthDate) {
			errors.birthDate = "Please Provide Your BirthDate";
		}

		if (!gender) {
			errors.gender = "Please Select Your Gender";
		}

		return {
			errors,
			isValid: Object.keys(errors).length === 0,
		};
	};

	render() {
		const {
			values: { name, email, password, birthDate },
			isChecked,
			errors,
		} = this.state;
		return (
			<div className="container">
				<h2>Signup Form</h2>
				<form onSubmit={this.handleSubmit}>
					<Input
						label="Enter Full Name: "
						type="text"
						name="name"
						placeholder="A B M Zubayer"
						value={name}
						error={errors.name}
						handler={this.handleChange}
					/>
					<Input
						label="Enter Your Email: "
						type="email"
						name="email"
						placeholder="test12@gmail.com"
						value={email}
						error={errors.email}
						handler={this.handleChange.bind(this)}
					/>

					<Input
						label="Enter Your Password: "
						type="password"
						name="password"
						placeholder="pass123"
						value={password}
						error={errors.password}
						handler={(event) => this.handleChange(event)}
					/>
					<Input
						label="Enter Your Birth Date: "
						type="date"
						name="birthDate"
						value={birthDate}
						error={errors.birthDate}
						handler={(event) => this.handleChange(event)}
					/>
					<div className="form-group">
						<RadioInput
							type="radio"
							name="gender"
							value="Male"
							handler={(event) => this.handleChange(event)}
						/>
						<RadioInput
							type="radio"
							name="gender"
							value="Female"
							handler={(event) => this.handleChange(event)}
						/>
						<RadioInput
							type="radio"
							name="gender"
							value="Other"
							handler={(event) => this.handleChange(event)}
						/>
					</div>

					<div className="form-group">
						<input
							type="checkbox"
							className="mr-1"
							checked={isChecked}
							onChange={this.handleChecked}
						/>
						I agree to all terms & Condition
					</div>

					<button className="btn btn-dark my-2" type="submit" disabled={!isChecked}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
