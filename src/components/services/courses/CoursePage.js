import React, { useState } from 'react';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../actions/course';
import FormikCourse from './FormikCourse';
import FileUpload from '../../upload/FileUpload';

function CoursePage(props) {
	const [ courseId, setCourseId ] = useState('');

	const dispatch = useDispatch();
	const submit = (data) =>
		dispatch(addCourse(data)).then((res) => {
			const Id = res.course._id;
			setCourseId(Id);

			if (res) message.success('The course has been created');
		});

	return (
		<div>
			<FormikCourse submit={submit} />
			<FileUpload courseId={courseId} />
		</div>
	);
}

export default CoursePage;
