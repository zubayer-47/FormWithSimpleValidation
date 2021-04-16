import React, { Component } from "react";
import "./Form/App.css";
import Form from "./Form/Form";

class App extends Component {
	state = {
		users: [],
	};

	createUser = (user) => {
		user.id = new Date().getTime().toString();
		this.setState({
			users: [...this.state.users, user],
		});
	};

	render() {
		return (
			<>
				<Form createUser={(user) => this.createUser(user)} />

				{this.state.users.length !== 0 && (
					<div className="row mx-5 px-5 my-5">
						<div className="col-sm-12 my-5">
							<h3 className="text-center my-4 text-success">All Registered Users</h3>
							<table className="table table-striped">
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>BirthDate</th>
										<th>Gender</th>
									</tr>
								</thead>
								<tbody>
									{this.state.users.map((user) => (
										<tr key={user.id}>
											<td> {user.name} </td>
											<td> {user.email} </td>
											<td> {user.birthDate} </td>
											<td> {user.gender} </td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default App;
