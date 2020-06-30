import React, { useState } from 'react';
import { Typography, Form, Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import QuillEditor from './QuillEditor';

const { Title } = Typography;

function BlogForm(props) {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const [ files, setFiles ] = useState([]);
	console.log(title);

	const writer = useSelector((state) => state.user.firstname);

	const onEditorChange = (value) => {
		setContent(value);
	};

	const onFilesChange = (files) => {
		setFiles(files);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			title,
			content,
			writer
		};
		props.submit(data);
		setContent('');
	};
	return (
		<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
			<div style={{ textAlign: 'center' }}>
				<Title level={2}>Editor</Title>
			</div>
			<Form>
				<Form.Item label="Blog Title">
					<Input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
				</Form.Item>

				<QuillEditor
					placeholder={'Start making a blog'}
					onEditorChange={onEditorChange}
					onFilesChange={onFilesChange}
				/>

				<div style={{ textAlign: 'center', margin: '2rem' }}>
					<Button size="large" htmlType="submit" onClick={handleSubmit}>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default BlogForm;
