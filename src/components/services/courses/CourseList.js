import React from 'react';
import './CourseList.css';
import { Layout, Row, Col, Button, Card } from 'antd';
import { NavLink } from 'react-router-dom';
import FooterComp from '../../layouts/footer/FooterComp';
const { Content } = Layout;
const { Meta } = Card;

export default function CourseList() {
	return (
		<Layout>
			<Content>
				<div
					style={{
						background: '#ff595e',
						width: '100%',
						height: '8em',
						color: 'white'
					}}
				>
					<h2 style={{ color: 'white', paddingTop: 40, marginLeft: '10em' }}>
						Here is our avillable courses at the moment
					</h2>
				</div>
				<div className="courses container">
					<Row>
						<Col span={11}>
							<Card
								hoverable
								title={<h2>REACT/REDUX</h2>}
								cover={<img className="card-img" alt="example" src="/images/react-redux.png" />}
							>
								<Meta
									title="React/Redux Description"
									description="lore dihsiudh jiahdihd uiahdi aihiajhs"
								/>
								<NavLink to="/course/react-redux">
									<Button type="primary" style={{ marginTop: 25 }}>
										View Course
									</Button>
								</NavLink>
							</Card>
						</Col>

						<Col span={11} offset={2}>
							<Card
								hoverable
								title={<h2>NODE/EXPRESS</h2>}
								cover={<img alt="example" src="/images/node-express.png" className="card-img" />}
							>
								<Meta title="Node/Express" description="lore dihsiudh jiahdihd uiahdi aihiajhs" />
								<NavLink to="/course/node-express">
									<Button type="primary" style={{ marginTop: 25 }}>
										View Course
									</Button>
								</NavLink>
							</Card>
						</Col>
					</Row>
					<div className="course">
						<Row>
							<Col span={11}>
								<Card
									hoverable
									title={<h2>UI/UX</h2>}
									cover={<img alt="example" src="/images/UXUI.png" className="card-img" />}
								>
									<Meta
										title="UI/UX Description"
										description="lore dihsiudh jiahdihd uiahdi aihiajhs"
									/>
									<NavLink to="/course/ui-ux">
										<Button type="primary" style={{ marginTop: 25 }}>
											View Course
										</Button>
									</NavLink>
								</Card>
							</Col>
							<Col span={11} offset={2}>
								<Card
									hoverable
									title={<h2>MERN STACK</h2>}
									cover={<img alt="example" src="/images/mern-stack.png" className="card-img" />}
								>
									<Meta
										title="MERN StackDescription"
										description="lore dihsiudh jiahdihd uiahdi aihiajhs"
									/>
									<NavLink to="/course/mern-stack">
										<Button type="primary" style={{ marginTop: 25 }}>
											View Course
										</Button>
									</NavLink>
								</Card>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
			<FooterComp />
		</Layout>
	);
}
