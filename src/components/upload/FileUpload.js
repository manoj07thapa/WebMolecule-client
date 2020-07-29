import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'antd';

function FileUpload({ courseId }) {
	const [ courseImg, setCourseImg ] = useState('');

	const OnFileChange = (e) => {
		setCourseImg(e.target.files[0]);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('courseImg', courseImg);
		formData.append('courseId', courseId);
		await axios.post('/api/image', formData, {});
	};

	return (
		<div>
			<Row>
				<Col>
					<form onSubmit={onSubmit}>
						<h3>Upload Course Image</h3>
						<div>
							<input type="file" onChange={OnFileChange} name="courseImg" />
						</div>
						<div>
							<Button onClick={onSubmit}>Upload</Button>
						</div>
					</form>
				</Col>
			</Row>
		</div>
	);
}

export default FileUpload;
