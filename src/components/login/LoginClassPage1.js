import React, { useState, useEffect, Component } from 'react';
import Validator from 'validator';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLoggedIn } from '../../actions/auth';
import { Form, Input, Button } from 'antd';

class LoginPage1 extends Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		errors: {}
	};
	handleChange = (e) => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			axios
				.post('/api/auth', this.state.data)
				.then((res) => res.data.user)
				.then((user) => userLoggedIn(user))
				.then(() => this.props.history.push('/'))
				.catch((err) => this.setState({ errors: err.response.data.errors }));
			console.log(errors);
		}
	};

	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
		if (!data.password) errors.password = "Can't be blank";
		return errors;
	};
	render() {
		const { data, errors, loading } = this.state;

		return (
			<form onSubmit={this.handleSubmit} style={{ margin: '200px' }} method="POST">
				{errors.global && <p>{errors.global}</p>}
				<label>Email</label>
				<input type="email" name="email" onChange={this.handleChange} value={this.state.data.email} />
				{errors.email && <p>{errors.email}</p>}
				<br />
				<br />
				<label>Password</label>
				<input type="password" name="password" onChange={this.handleChange} value={this.state.data.password} />
				{errors.email && <p>{errors.email}</p>}

				<br />
				<br />

				<button type="Submit">submit</button>
			</form>
		);
	}
}

export default connect(null, { userLoggedIn })(LoginPage1);
