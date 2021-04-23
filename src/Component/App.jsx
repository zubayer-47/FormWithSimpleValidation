import React from "react";
import Title from "./Title";

class App extends React.Component {
	state = {
		name: "",
		obj: [],
		isClicked: false,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		const obj = {};
		obj.id = new Date().getTime().toString();
		obj.name = this.state.name;

		this.setState({
			isClicked: true,
			obj: [obj, ...this.state.obj],
		});
	};

	handleRemove = (id) => {
		const {obj} = this.state;
		this.setState({
			// eslint-disable-next-line eqeqeq
			obj: this.state.obj.filter((v, index) => index != obj.findIndex(ob => obj.indexOf(ob))),
			...this.state,
		})
		// console.log(
		// 	this.state.obj.filter(
		// 		(v, index) => index !== obj.findIndex((ob) => obj.indexOf(ob))
		// 		)
		// 		);
		// console.log(this.state.obj);
	};
	render() {
		return (
			<div className="container">
				<Title value={this.state.name} handleChange={this.handleChange} />
				<div>
					<button onClick={this.handleClick} className="btn btn-dark">
						Submit
					</button>
				</div>
				<div>
					<ul className="list-group my-2">
						{this.state.obj.map((li) => (
							<li className="list-group-item" key={li.id}>
								{li.name}{" "}
								<button
									onClick={() => this.handleRemove(li.id)}
									className="btn btn-dark"
								>
									Remove
								</button>{" "}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
