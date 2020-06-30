import React from 'react';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import BlogForm from './BlogForm';
import { addBlog } from '../../actions/blog';

function BlogPage(props) {
	const dispatch = useDispatch();
	const submit = (data) =>
		dispatch(addBlog(data)).then((res) => {
			if (res) message.success('The blog has been created');
		});
	return (
		<div>
			<BlogForm submit={submit} />
		</div>
	);
}

export default BlogPage;
