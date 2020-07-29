import React from 'react';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
import { Upload, Button, Modal } from 'antd';
class FileUpload2 extends React.Component {
	state = {
		previewVisible: false,
		previewImage: '',
		courseImg: ''
	};

	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = (file) => {
		this.setState({
			previewImage: file.thumbUrl,
			previewVisible: true
		});
	};

	handleUpload = ({ fileList }) => {
		//---------------^^^^^----------------
		// this is equivalent to your "const img = event.target.files[0]"
		// here, antd is giving you an array of files, just like event.target.files
		// but the structure is a bit different that the original file
		// the original file is located at the `originFileObj` key of each of this files
		// so `event.target.files[0]` is actually fileList[0].originFileObj
		// you store them in state, so that you can make a http req with them later
		this.setState({ courseImg: fileList[0].originFileObj });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		let formData = new FormData();
		// add one or more of your files in FormData
		// again, the original file is located at the `originFileObj` key
		formData.append('file', this.state.courseImg);
		console.log(formData);
		console.log(this.props);
		axios
			.post('/api/image', formData)
			.then((res) => {
				console.log('res', res);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	render() {
		const { previewVisible, previewImage, fileList } = this.state;
		const uploadButton = (
			<div>
				<PlusOutlined />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		return (
			<div>
				<Upload
					listType="picture-card"
					fileList={fileList}
					onPreview={this.handlePreview}
					onChange={this.handleUpload}
					beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
				>
					{uploadButton}
				</Upload>

				<Button
					onClick={this.handleSubmit} // this button click will trigger the manual upload
				>
					Submit
				</Button>

				<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
			</div>
		);
	}
}

export default FileUpload2;
