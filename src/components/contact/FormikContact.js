import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, Alert, Card, Input, Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const initialValues = {
	fullname: '',
	email: '',
	phoneNumbers: [ '' ],
	customer: false,
	student: false,
	query: ''
};

const validationSchema = Yup.object({
	fullname: Yup.string().required(),
	email: Yup.string().required('Email is required !!').email('Invalid email format !!'),
	phoneNumbers: Yup.array(),
	customer: Yup.boolean(),
	student: Yup.boolean(),
	query: Yup.string().required()
});

function FormikContact(props) {
	const onSubmit = (values, actions) => {
		props.submit(values).catch((err) => {
			actions.setErrors(err.response.data.errors);
			// err.response.data.map((serverError) => {
			// 	actions.setFieldError(serverError.name, serverError.serverErr);
			// });

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
				<Card hoverable cover>
					<h1>Contact Us</h1>
					{errors.global && (
						<Alert message="Something went wrong" description={errors.global} type="error" showIcon />
					)}
					<Form>
						<div>
							<label htmlFor="fullname">Full Name</label>
							<Field type="text" id="fullname" name="fullname" as={Input} />
							<ErrorMessage name="fullname">{(errorMsg) => <div>{errorMsg}</div>}</ErrorMessage>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<Field type="email" id="email" name="email" as={Input} />
							<ErrorMessage name="email">{(errorMsg) => <div>{errorMsg}</div>}</ErrorMessage>
						</div>
						<div>
							<label htmlFor="phoneNumbers">List of Phone Numbers</label>
							<FieldArray id="phoneNumbers" name="phoneNumbers">
								{(fieldArrayProps) => {
									const { push, remove, form: { values: { phoneNumbers } } } = fieldArrayProps;
									return (
										<div>
											{phoneNumbers.map((phoneNumber, index) => (
												<div key={index}>
													<Field name={`phoneNumbers[${index}]`} as={Input} />
													{index > 0 && (
														<button type="button" onClick={() => remove(index)}>
															-
														</button>
													)}

													<button type="button" onClick={() => push('')}>
														Add an alternative number
													</button>
												</div>
											))}
										</div>
									);
								}}
							</FieldArray>
						</div>

						<div>
							<label htmlFor="customer">Customer</label>
							<Field type="checkbox" id="customer" name="customer" as={Checkbox} />
							<ErrorMessage name="customer">{(errorMsg) => <div>{errorMsg}</div>}</ErrorMessage>
						</div>
						<div>
							<label htmlFor="student">Student</label>
							<Field type="checkbox" id="student" name="student" as={Checkbox} />
							<ErrorMessage name="student">{(errorMsg) => <div>{errorMsg}</div>}</ErrorMessage>
						</div>
						<div>
							<label htmlFor="query">Customer</label>
							<Field type="text" id="query" name="query" as={TextArea} />
							<ErrorMessage name="query">{(errorMsg) => <div>{errorMsg}</div>}</ErrorMessage>
						</div>
						<div>
							<Button type="primary" htmlType="submit" loading={isSubmitting}>
								Send Query
							</Button>
						</div>
					</Form>
				</Card>
			)}
		</Formik>
	);
}

export default FormikContact;
