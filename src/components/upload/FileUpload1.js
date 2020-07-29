import React, { Fragment } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

class FileUpload1 extends React.Component {
	state = {
		fileList: '',
		uploading: false
	};

	handleUpload = () => {
		const { fileList } = this.state;
		const formData = new FormData();
		fileList.forEach((file) => {
			console.log(file);
			formData.append('file', file.name);
		});
		console.log(fileList);

		axios
			.post('/api/image', formData)
			.then((res) => {
				console.log('res', res);
			})
			.catch((err) => {
				console.log('err', err);
			});

		this.setState({
			uploading: true
		});
	};

	render() {
		const { uploading, fileList } = this.state;
		const props = {
			onRemove: (file) => {
				this.setState((state) => {
					const index = state.fileList.indexOf(file);
					const newFileList = state.fileList.slice();
					newFileList.splice(index, 1);
					return {
						fileList: newFileList
					};
				});
			},
			beforeUpload: (file) => {
				this.setState((state) => ({
					fileList: [ ...state.fileList, file ]
				}));
				return false;
			},
			fileList
		};
		return (
			<Fragment>
				<Upload {...props}>
					<Button>
						<UploadOutlined /> Select Course Image
					</Button>
				</Upload>
				<Button
					type="primary"
					onClick={this.handleUpload}
					disabled={fileList.length === 0}
					loading={uploading}
					style={{ marginTop: 16 }}
				>
					{uploading ? 'Uploading' : 'Start Upload'}
				</Button>
			</Fragment>
		);
	}
}

export default FileUpload1;
