import React, { useState } from 'react';
import Validator from 'validator';
import { Form, Input, Button, Alert } from 'antd';

const layout = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 8
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16
	}
};

function LoginForm(props) {
	const [ userData, setUserData ] = useState({
		email: '',
		password: ''
	});
	const [ errors, setErrors ] = useState({});
	const [ loading, setLoading ] = useState();

	const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate(userData);
		setErrors(errors);

		if (Object.keys(errors).length === 0) {
			setLoading(true);
			props.submit(userData).catch((err) => setErrors(err.response.data.errors));
			setLoading(false);

			/*this is an alternative to using async thunk middleware which calls api from action
			axios
				.post('/api/auth', userData)
				// .then((res) => res.data.user)
				.then((user) => dispatch(userLoggedIn(user)))
				.then(() => props.history.push('/'))
				.catch((err) => setErrors(err.response.data.errors));
			setLoading(false);
			console.log(errors);*/
		}
	};

	//todo:full validation
	const validate = (data) => {
		const errors = {};
		// if (!Validator.isEmail(userData.email)) errors.email = 'Invalid email';
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) errors.email = 'Invalid email';
		if (!userData.password) {
			errors.password = "Can't be blank";
		} else if (userData.password.length < 4) {
			errors.password = 'has to be at leat 4 characters';
		}
		return errors;
	};

	return (
		<Form {...layout} style={{ margin: '200px' }}>
			{errors.global && (
				<Alert message="Something went wrong" description={errors.global} type="error" showIcon />
			)}
			<Form.Item label="Email" validateStatus="error" help={errors.email}>
				<Input name="email" type="email" value={userData.email} onChange={handleChange} />
				{/*  {errors.email && <p style={{ color: 'red', marginTop: '10px' }}>{errors.email}</p>} */}
			</Form.Item>

			<Form.Item label="Password" validateStatus="error" help={errors.password}>
				<Input.Password name="password" type="password" value={userData.password} onChange={handleChange} />
				{/* {errors.password && <p style={{ color: 'red', marginTop: '10px' }}>{errors.password}</p>} */}
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit" onClick={handleSubmit} loading={loading}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;
