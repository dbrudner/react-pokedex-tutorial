import React, { Component } from "react";

export default class Form extends Component {
	state = {
		search: ""
	};

	handleChange = e => this.setState({ search: e.target.value });

	handleSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.search} onChange={this.handleChange} />
				<button className="btn btn-primary">Search</button>
			</form>
		);
	}
}
