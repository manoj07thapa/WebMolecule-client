import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Typography, Spin, Collapse } from 'antd';
const { Title } = Typography;
const { Panel } = Collapse;

function Course(props) {
	const [ course, setCourse ] = useState({});
	const [ cirriculum, setCirriculum ] = useState([]);

	const courseId = props.match.params.courseId;

	//we are making the request from  react com and not from redux action bcuz we wont be
	//needing this component anywhere else, in future if we may need we will use redux thunk way

	useEffect(
		() => {
			axios
				.post('/api/course/getCourse', { courseId })
				.then((res) => {
					console.log(res.data);
					setCourse(res.data);
					setCirriculum(res.data.cirriculums);
				})
				.catch((err) => console.log(err));
		},
		[ courseId ]
	);

	const data = (
		<div className="postPage container" style={{ width: '80%', margin: '3rem auto' }}>
			<Title level={2}>{course.title}</Title>
			{cirriculum.map((cirr) => (
				<Collapse defaultActiveKey={[ '1' ]} bordered={false} key={cirr._id}>
					<Panel header={cirr.cirrtitle}>
						<p>{cirr.cirrdescription}</p>
					</Panel>
				</Collapse>
			))}
		</div>
	);

	return (
		<Fragment>
			<div
				style={{
					background: '#471069',
					height: '36em'
				}}
			>
				<div style={{ color: 'white', padding: 10 }} className="container">
					<h1 style={{ color: 'white', padding: 0, marginTop: '1em', lineHeight: '1.3em' }}>
						{course.title}
					</h1>
					<h2 style={{ color: 'white' }}>{course.subtitle}</h2>
					<p style={{ paddingTop: 20 }}>{course.description}</p>
				</div>
			</div>
			<div>
				{course ? (
					data
				) : (
					<div style={{ textAlign: 'center', marginTop: 100 }}>
						<Spin size="large" />
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default Course;
