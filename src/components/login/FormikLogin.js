import React from 'react';
import './FormikLogin.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Alert, Card, Input, Row, Col } from 'antd';

const initialValues = {
	email: '',
	password: ''
};

const validationSchema = Yup.object({
	email: Yup.string().required('Email is required !!').email('Invalid email format !!'),
	password: Yup.string().required('Password is required !!')
});

function FormikLogin(props) {
	const onSubmit = (values, actions) => {
		props.submit(values).catch((err) => {
			if (err.response.data.errors.emailErr) {
				actions.setFieldError('email', err.response.data.errors.emailErr);
			} else {
				actions.setFieldError('password', err.response.data.errors.passErr);
			}
			actions.setSubmitting(false);
		});
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			validateOnBlur={false}
		>
			{({ errors, isSubmitting }) => (
				<Row justify="center">
					<Col lg={10} md={14} sm={18} xs={20}>
						<div>
							<Card hoverable className="card " cover>
								<h1>User Login</h1>
								{errors.global && (
									<Alert message="Oops!!" description={errors.global} type="error" showIcon />
								)}
								<Form>
									<div className="form-control">
										<label htmlFor="email">Email</label>
										<Field type="email" id="email" name="email" as={Input} />
										{/* alternatively we can use render props pattern to render error unlike in other fields */}
										<ErrorMessage name="email">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div className="form-control">
										<label htmlFor="password">Password</label>
										<Field type="password" id="password" name="password" as={Input} />
										<ErrorMessage name="password">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div className="form-control">
										<Button type="primary" htmlType="submit" loading={isSubmitting}>
											Submit
										</Button>
									</div>
								</Form>
							</Card>
						</div>
					</Col>
				</Row>
			)}
		</Formik>
	);
}

export default FormikLogin;
