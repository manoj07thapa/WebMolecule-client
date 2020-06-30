import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Card, Row, Col } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { fetchBlog } from '../../actions/blog';

const { Title } = Typography;

function BlogList(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBlog());
	}, []);

	const blogs = useSelector((state) => state.blog);
	console.log(blogs);
	const { id } = useParams();
	console.log(props);

	const renderCards = blogs.map((blog, index) => {
		return (
			<Col key={index} lg={8} md={12} xs={24}>
				<Card hoverable style={{ width: 370, marginTop: 16 }}>
					<Card.Meta title={blog.writer} />

					<div style={{ height: 150, overFlowY: 'scroll', marginTop: 10 }}>
						<div dangerouslySetInnerHTML={{ __html: blog.content }} />
					</div>
					<Link to={`/blog/${blog._id}`}>Read More</Link>
				</Card>
			</Col>
		);
	});

	return (
		<div
			style={{
				background: '#ececec',
				padding: '30px'
			}}
		>
			<Title level={2}>Blog List</Title>
			<Row gutter={16}>{renderCards}</Row>
		</div>
	);
}

export default BlogList;
