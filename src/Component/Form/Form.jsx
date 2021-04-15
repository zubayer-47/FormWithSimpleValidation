import React, { Component } from "react";
import Input from "./Input/Input";
import RadioInput from "./Input/RadioInput";

class Form extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		birthDate: "",
		gender: "",
		isChecked: false,
		errors: {}
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
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
		const { isValid, errors } = this.validate()

		if (isValid) {
			console.log(this.state);

			event.target.reset();
			this.setState({
				name: "",
				email: "",
				password: "",
				birthDate: "",
				gender: "",
				isChecked: false,
			});
		} else {
			this.setState({
				errors
			})
		}

	};

	validate = () => {
		const errors = {}
		const { name, email, password, gender, birthDate } = this.state

		if (!name) {
			errors.name = 'Please Provide Your Name'
		}

		if (!email) {
			errors.email = 'Please Provide Your Email'
		}

		if (!password) {
			errors.password = 'Please Provide Your Password'
		}

		if (!birthDate) {
			errors.birthDate = 'Please Provide Your BirthDate'
		}

		if (!gender) {
			errors.gender = 'Please Select Your Gender'
		}

		return {
			errors,
			isValid: Object.keys(errors).length === 0
		}
	}

	render() {
		const { name, email, password, birthDate, isChecked, errors } = this.state;
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
						handler={(event) => this.handleChange(event)}
					/>
					<Input
						label="Enter Your Email: "
						type="email"
						name="email"
						placeholder="test12@gmail.com"
						value={email}
						error={errors.email}
						handler={(event) => this.handleChange(event)}
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
