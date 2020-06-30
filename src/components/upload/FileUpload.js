import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';

const FileUpload = () => {
	const [ courseImage, setCourseImage ] = useState('');
	// const [ filename, setFilename ] = useState('Choose File');
	// const [ uploadedFile, setUploadedFile ] = useState({});

	const onChange = (e) => {
		setCourseImage(e.target.files[0]);
		// setFilename(e.target.files[0].name);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('Image', courseImage);
		try {
			const res = await axios.post('/api/image', formData);
			// const { url, fileName } = res.data;
			// setUploadedFile({ url, fileName });
			// console.log(uploadedFile);
			// setFile('');
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Fragment>
			{/* <form onSubmit={onSubmit} style={{ margin: 100 }}> */}
			<div style={{ boarder: '2px solid red' }}>
				<input type="file" id="customFile" onChange={onChange} />
				{/* <label htmlFor="customFile">{filename}</label> */}
			</div>
			<button type="submit" onClick={onSubmit}>
				Upload
			</button>
			{/* </form> */}
		</Fragment>
	);
};

export default FileUpload;
