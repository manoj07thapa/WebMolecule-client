import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, Alert, Card, Input, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const validationSchema = Yup.object({
	title: Yup.string().required('Title is required !!'),
	subtitle: Yup.string(),
	description: Yup.string().required('Description is required !!'),
	cirriculums: Yup.array().of(
		Yup.object().shape({
			cirrtitle: Yup.string().required(),
			cirrdescription: Yup.string().required()
		})
	)
});

function FormikCourse({ submit }) {
	const initialValues = {
		title: '',
		subtitle: '',
		courseImage: '',
		description: '',
		cirriculums: [ { cirrtitle: '', cirrdescriptions: '' } ]
	};

	const onSubmit = (values, actions) => {
		console.log(values);
		submit(values).catch((err) => {
			actions.setErrors(err.response.data.error);
		});
		actions.setSubmitting(false);
		actions.resetForm();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ errors, isSubmitting }) => (
				<Row justify="center">
					<Col span={10}>
						<div>
							<h1>Add Course</h1>
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
									<label htmlFor="title">Course Title</label>
									<Field type="text" id="title" name="title" as={Input} />
									<ErrorMessage name="title">
										{(errorMsg) => <div className="error-message">{errorMsg}</div>}
									</ErrorMessage>
								</div>
								<div style={{ marginBottom: 40 }}>
									<label htmlFor="subtitle">Subtitle</label>
									<Field type="text" id="subtitle" name="subtitle" as={Input} />
									<ErrorMessage name="subtitle">
										{(errorMsg) => <div className="error-message">{errorMsg}</div>}
									</ErrorMessage>
								</div>

								<div>
									<label htmlFor="description">Description</label>
									<Field type="text" id="description" name="description" as={Input} />
									<ErrorMessage name="description">
										{(errorMsg) => <div className="error-message">{errorMsg}</div>}
									</ErrorMessage>
								</div>

								<div className="form-cirriculum">
									<FieldArray id="cirriculums" name="cirriculums">
										{(fieldArrayProps) => {
											const { push, remove, form: { values: { cirriculums } } } = fieldArrayProps;
											return (
												<div>
													{cirriculums.map((cirriculum, index) => (
														<div key={index}>
															<label htmlFor="">Title cirr</label>

															<Field
																name={`cirriculums[${index}].cirrtitle`}
																as={Input}
															/>
															<br />
															<br />
															<label htmlFor="">Cirriculum description</label>
															<Field
																name={`cirriculums[${index}].cirrdescription`}
																as={TextArea}
															/>

															<br />
															<br />
															{index > 0 && (
																<button type="button" onClick={() => remove(index)}>
																	<MinusOutlined />
																</button>
															)}
															<button type="button" onClick={() => push()}>
																<PlusOutlined />
															</button>
														</div>
													))}
												</div>
											);
										}}
									</FieldArray>
								</div>

								<div>
									<Button type="primary" htmlType="submit" loading={isSubmitting}>
										Submit
									</Button>
								</div>
							</Form>
						</div>
					</Col>
				</Row>
			)}
		</Formik>
	);
}

export default FormikCourse;
