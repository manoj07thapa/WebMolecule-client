import React from 'react';
import './FormikSignup.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Alert, Card, Input, Row, Col } from 'antd';

const initialValues = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const validationSchema = Yup.object({
	firstname: Yup.string().required('First name  is required !!'),
	lastname: Yup.string(),
	email: Yup.string().required('Email is required !!').email('Invalid email format !!'),
	password: Yup.string()
		.required('Password is required !!')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
		),
	confirmPassword: Yup.string().oneOf([ Yup.ref('password') ], "Password doesn't match")
});

function FormikSignup(props) {
	const onSubmit = (values, actions) => {
		props.submit(values).catch((err) => {
			if (err.response.status === 400) {
				err.response.data.map((serverError) => {
					return actions.setFieldError(serverError.name, serverError.serverErr);
				});
			} else {
				actions.setErrors(err.response.data.error);
			}

			actions.setSubmitting(false);
		});
	};
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ errors, isSubmitting }) => (
				<Row justify="center">
					<Col span={10}>
						<div>
							<Card hoverable cover>
								<h1>Signup</h1>
								{errors.global && (
									<Alert
										message="Something went wrong"
										description={errors.global}
										type="error"
										showIcon
									/>
								)}
								<Form>
									<div>
										<label htmlFor="firstname">Firstname</label>
										<Field type="text" id="firstname" name="firstname" as={Input} />
										{/* alternatively we can use render props pattern to render error unlike in other fields */}
										<ErrorMessage name="firstname">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div>
										<label htmlFor="lastname">Lastname</label>
										<Field type="text" id="lastname" name="lastname" as={Input} />
										{/* alternatively we can use render props pattern to render error unlike in other fields */}
										<ErrorMessage name="lastname">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div>
										<label htmlFor="email">Email</label>
										<Field type="email" id="email" name="email" as={Input} />
										{/* alternatively we can use render props pattern to render error unlike in other fields */}
										<ErrorMessage name="email">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div>
										<label htmlFor="password">Password</label>
										<Field type="password" id="password" name="password" as={Input} />
										<ErrorMessage name="password">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div>
										<label htmlFor="confirmPassword">Confirm Password</label>
										<Field type="password" id="confirmPassword" name="confirmPassword" as={Input} />
										{/* alternatively we can use render props pattern to render error unlike in other fields */}
										<ErrorMessage name="confirmPassword">
											{(errorMsg) => <div className="error-message">{errorMsg}</div>}
										</ErrorMessage>
									</div>
									<div>
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

export default FormikSignup;
