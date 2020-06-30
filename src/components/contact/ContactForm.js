import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Validator from 'validator';
// import classnames from 'classnames';
const { TextArea } = Input;

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

function ContactForm(props) {
	const [ queryData, setQueryData ] = useState({
		fullname: '',
		email: '',
		query: ''
	});
	// const [ phone, setPhone ] = useState();
	const [ errors, setErrors ] = useState({});
	const [ loading, setLoading ] = useState(false);

	const handleChange = (e) => setQueryData({ ...queryData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate(queryData);
		setErrors(errors);

		if (Object.keys(errors).length === 0) {
			setLoading(true);

			props.submit(queryData);
			setLoading(false);
		}
	};

	//todo:full validation
	const validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(queryData.email)) errors.email = 'Invalid email';
		if (!queryData.fullname) errors.fullname = "Can't be blank";
		// if (!phone) errors.phone = "Can't be blank";
		if (!queryData.query) errors.query = "Can't be blank";

		return errors;
	};

	return (
		<Form {...layout} style={{ padding: 20 }}>
			<Form.Item label="Fullname">
				<Input name="fullname" type="text" value={queryData.fullname} onChange={handleChange} />
				{errors.fullname && <p style={{ color: 'red', marginTop: '10px' }}>{errors.fullname}</p>}
			</Form.Item>
			<Form.Item label="Email">
				<Input name="email" type="email" value={queryData.email} onChange={handleChange} />
				{errors.email && <p style={{ color: 'red', marginTop: '10px' }}>{errors.email}</p>}
			</Form.Item>

			<Form.Item label="Query">
				<TextArea
					placeholder="Write your queries here"
					name="query"
					type="text"
					value={queryData.query}
					onChange={handleChange}
				/>
				{errors.query && <p style={{ color: 'red', marginTop: '10px' }}>{errors.query}</p>}
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="secondary" htmlType="submit" onClick={handleSubmit} loading={loading}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export default ContactForm;
