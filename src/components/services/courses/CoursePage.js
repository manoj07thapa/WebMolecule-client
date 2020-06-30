import React from 'react';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../actions/course';
import FormikCourse from './FormikCourse';

function CoursePage() {
	const dispatch = useDispatch();
	const submit = (data) =>
		dispatch(addCourse(data)).then((res) => {
			if (res) message.success('The course has been created');
		});
	return (
		<div>
			<FormikCourse submit={submit} />
		</div>
	);
}

export default CoursePage;
