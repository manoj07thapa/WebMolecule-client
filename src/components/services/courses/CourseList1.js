import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Card, Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { fetchCourse } from '../../../actions/course';

const { Title } = Typography;

function CourseList1() {
	const [ courses, setCourses ] = useState([]);
	// const courses = useSelector((state) => state.course);
	// setCourses(response);
	const dispatch = useDispatch();
	// const callback = useCallback(() => dispatch(fetchCourse()), [ dispatch ]);
	// const course = useSelector((state) => state.course);
	// console.log(course);
	/**We are not using useSelector() cuz it has some issues while using with useEffect
	 * courseImage data which is populated data didnot load rightaway and load only after page refresh
	 * so for now we are using state to save data from fetchCourse redux action until we have the proper solution
	 */
	useEffect(
		() => {
			dispatch(fetchCourse())
				.then((res) => {
					console.log(res.data);
					setCourses(res.course);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[ dispatch ]
	);

	return (
		<div
			style={{
				background: '#ececec',
				padding: '30px'
			}}
		>
			<Title level={2}>Course List</Title>
			{courses.length !== 0 ? (
				<Row gutter={4}>
					{courses.map((course, index) => {
						return (
							<Col key={index} lg={8} md={12} xs={24} span={11} offset={2}>
								<Link to={`/course/${course._id}`}>
									<Card
										hoverable
										title={<h2>{course.title}</h2>}
										cover={
											<img className="card-img" alt="example" src={course.courseImg.courseImg} />
										}
									>
										<Card.Meta title={course.subtitle} description={course.description} />
									</Card>
								</Link>
							</Col>
						);
					})}
				</Row>
			) : (
				<Spin />
			)}
		</div>
	);
}

export default CourseList1;
