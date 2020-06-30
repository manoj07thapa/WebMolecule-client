import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Typography, Spin } from 'antd';
const { Title } = Typography;

function Blog(props) {
	const [ blog, setBlog ] = useState({});

	const blogId = props.match.params.blogId;
	//we are making the request from  react com and not from redux action bcuz we wont be
	//needing this component anywhere else, in future if we may need we will use redux thunk way

	useEffect(
		() => {
			axios
				.post('/api/blog/getBlog', { blogId })
				.then((res) => setBlog(res.data.blog))
				.catch((err) => console.log(err));
		},
		[ blogId ]
	);

	if (blog) {
		const createDate = moment().format('MMM Do Y');
		return (
			<div className="postPage" style={{ width: '80%', margin: '3rem auto' }}>
				<Title level={2}>{blog.writer}`s Post</Title>

				<p>{blog.title}</p>

				<br />
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Title level={4}>{createDate}</Title>
				</div>
				<div dangerouslySetInnerHTML={{ __html: blog.content }} />
			</div>
		);
	} else {
		return (
			<div style={{ textAlign: 'center' }}>
				<Spin size="large" />
			</div>
		);
	}
}

export default Blog;
