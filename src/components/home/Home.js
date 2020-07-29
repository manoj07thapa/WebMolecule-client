import React, { useState } from 'react';
import './Home.css';
import { Carousel, Card, Row, Col, Layout, Divider } from 'antd';
import { ToolOutlined, TeamOutlined, LaptopOutlined, SketchOutlined } from '@ant-design/icons';
import FooterComp from '../layouts/footer/FooterComp';
// const { Content } = Layout;

const items = [
	{
		src: 'images/img1.jpg',
		altText: 'Slide 1',
		caption: 'Slide 1'
	},
	{
		src: 'images/img2.jpg',
		altText: 'Slide 2',
		caption: 'Slide 2'
	},
	{
		src: 'images/img3.jpg',
		altText: 'Slide 3',
		caption: 'Slide 3'
	}
];

const tabList = [
	{
		key: 'tab1',
		tab: (
			<h2 style={{ paddingLeft: '10px', fontFamily: 'Roboto', fontSize: '1.5em', fontWeight: 500 }}>
				SOFTWARE SOLUTION
			</h2>
		)
	},
	{
		key: 'tab2',
		tab: (
			<h2 style={{ paddingRight: '10px', fontFamily: 'Roboto', fontSize: '1.5em', fontWeight: 500 }}>
				SOFTWARE BOOTCAPM
			</h2>
		)
	}
];

const contentList = {
	tab1: (
		<p style={{ padding: '10px' }}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi, quis voluptatem explicabo optio quae
			non, atque commodi doloribus nobis consectetur amet reprehenderit sapiente neque consequuntur nostrum.
			Maiores sapiente fuga nihil, quia ipsa in ab blanditiis perferendis obcaecati rerum necessitatibus
			dignissimos, possimus, aut adipisci sed et cum impedit. Ipsa nesciunt error impedit sed sit harum voluptas
			dolore. Error beatae culpa laudantium, ipsam ullam eaque qui impedit officiis recusandae nobis eos inventore
			laborum et nihil quidem quos magni vel perferendis maiores dolores voluptatum. Vitae unde laborum minima
			labore excepturi tenetur iure fugiat non, voluptas, ipsam at recusandae deleniti, aut cupiditate corrupti.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis fugit minima eos quaerat
			explicabo nemo saepe adipisci obcaecati. Iure quos voluptatum minima ut quo dolorum officiis aspernatur
			porro ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic ipsam sequi temporibus, ea, minima
			quas, facere magnam architecto fugiat quis inventore et? Atque aspernatur et quae eligendi quos quibusdam?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime alias minima, repudiandae, explicabo
			ducimus, tenetur praesentium in rerum dignissimos iste fug loeit odit possimus officia sit id ea at. Dicta!
		</p>
	),
	tab2: (
		<p style={{ padding: '10px' }}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, nihil. Possimus reprehenderit facilis
			ipsam dolorem ea, non asperiores molestiae laborum magni ipsum eum quam placeat, optio vero accusantium,
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, consequatur corrupti placeat error
			possimus, maxime delectus tempora nulla fuga incidunt obcaecati tempore dolorum id velit? Provident quaerat
			fugiat laborum deleniti. sequi libero?
		</p>
	)
};

function Home() {
	const [ state, setState ] = useState({
		key: 'tab1'
	});

	const onTabChange = (key, type) => {
		console.log(key, type);
		setState({ [type]: key });
	};
	return (
		<div>
			<div className="carousel">
				<Carousel autoplay>{items.map((item, i) => <img key={i} alt="carousel" src={item.src} />)}</Carousel>
			</div>
			<div
				className="event"
				style={{
					background: 'var(--secondary',
					width: '100%',
					height: '8em',
					color: 'white',
					textAlign: 'center'
				}}
			>
				<h3 style={{ color: 'white', paddingTop: 10 }}>Upcomming Event</h3>
				<p>On thrusday november-10 2020, there is going to be a seminar</p>
			</div>
			<div className="container">
				<div className="margin-main introduction">
					<h1>What is Web Molecule ?</h1>
					<div className="tool">
						<ToolOutlined style={{ fontSize: '3em', color: '#1890ff', padding: 15 }} />
						<h2>CARRER-FOCUSED CIRRICULUM</h2>
					</div>

					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quos. Expedita ipsa debitis hic.
						Doloribus minima obcaecati illo possimus, saepe et quam labore aperiam ipsa non id alias quod
						expedita!
					</p>

					<div className="tool">
						<TeamOutlined style={{ fontSize: '3em', color: '#1890ff', padding: 15 }} />
						<h2>TAUGHT BY INDUSTRY PROFESSIONALS</h2>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi fugiat asperiores
						sapiente saepe deserunt, illum quam maxime dolores assumenda in similique libero ducimus
						doloremque sit adipisci facere quas animi.
					</p>

					<div className="tool">
						<LaptopOutlined style={{ fontSize: '3em', color: '#1890ff', padding: 15 }} />
						<h2>WORLD CLASS AND UPTO DATE TECHNOLOGIES</h2>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam non soluta deserunt rem! Odio,
						eius non dolor dolores omnis excepturi voluptas officiis tempore asperiores! Iusto laboriosam
						nostrum sapiente exercitationem fugit.
					</p>
					<div className="tool">
						<SketchOutlined style={{ fontSize: '3em', color: '#1890ff', padding: 15 }} />
						<h2>ENTERPRISE LEVEL SOFTWARE SOLUTIONS</h2>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam non soluta deserunt rem! Odio,
						eius non dolor dolores omnis excepturi voluptas officiis tempore asperiores! Iusto laboriosam
						nostrum sapiente exercitationem fugit.
					</p>
				</div>

				<div className="card-tab">
					<h1>What Web Molecule Offers?</h1>
					<Card
						bordered={false}
						tabList={tabList}
						activeTabKey={state.key}
						onTabChange={(key) => {
							onTabChange(key, 'key');
						}}
					>
						{contentList[state.key]}
					</Card>
				</div>
			</div>

			<div
				style={{
					background: '#471069',
					height: '30em',
					marginTop: '7em',
					borderTop: '7px solid var(--secondary)'
				}}
			>
				<div style={{ color: 'white', padding: 10 }} className="container">
					<h1 style={{ color: 'white', padding: 0, marginTop: '1em', lineHeight: '1.3em' }}>
						Hundreds of YouTube videos! Thousands of tutorial blog posts!
					</h1>
					<h2 style={{ color: 'white' }}>Feeling lost yet?</h2>
					<p style={{ paddingTop: 20 }}>
						There is no shortage of video tutorials and blog posts online today. In fact, we have the
						opposite problem. We have too many of them. How often do you watch a tutorial and end up not
						getting what you wanted? Or realize you don't have the prerequisite information? How often do
						you not even know what to learn? You don't need more free tutorials. You need planned and guided
						learning. You need a learning map!
					</p>
				</div>
			</div>
			<div className="container">
				<Row style={{ marginTop: '7em' }}>
					<Col span={11}>
						<img src="/images/react.png" alt="confused" style={{ width: '100%', height: '20em' }} />
					</Col>
					<Col span={11} offset={2}>
						<h1 style={{ lineHeight: '1.2em' }}>Hands-on coding assignments</h1>
						<h2>Learn. Do. Learn.</h2>
						<p>
							Watching video tutorials is just the beginning. Get hands-on assignments with course videos
							that allow you to actually apply and implement what is being taught in the course material.
							This is active learning!
						</p>
					</Col>
				</Row>
			</div>
			<div className="container margin-main">
				<Row>
					<h1>Your complete path to becoming a successful developer</h1>
					<Col span={6}>
						<h2>Projet based Trainning</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iste ut incidunt,
							doloremque itaque accusantium ipsam alias rem expedita nobis odio nulla deleniti,
							consectetur harum praesentium dignissimos laborum. Quae, voluptatum.
						</p>
					</Col>
					<Divider type="vertical" />
					<Col span={6} offset={2}>
						<h2>Designing the project</h2>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iste ut incidunt,
							doloremque itaque accusantium ipsam alias rem expedita nobis odio nulla deleniti,
							consectetur harum praesentium dignissimos laborum. Quae, voluptatum.
						</p>
					</Col>
					<Divider type="vertical" />

					<Col span={6} offset={2}>
						<h2>Project Deployment</h2>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iste ut incidunt,
							doloremque itaque accusantium ipsam alias rem expedita nobis odio nulla deleniti,
							consectetur harum praesentium dignissimos laborum. Quae, voluptatum.
						</p>
					</Col>
				</Row>
			</div>

			<FooterComp />
		</div>
	);
}

export default Home;
