import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
const { Footer } = Layout;

function FooterComp() {
	return (
		<Layout>
			<Footer style={{ background: '#293241', color: 'white', marginTop: '7em' }}>
				<Row>
					<Col span={10} offset={4}>
						<p>Email: vhonx@gmail.com</p>
						<p>Phone: 01-6631641</p>
						<p>Mobile: 9863715907</p>
					</Col>
					<Col span={4} offset={4}>
						<a
							href="https://www.facebook.com/free7dom/"
							target="_blank"
							style={{ paddingLeft: 10, fontSize: '2em' }}
						>
							<FacebookOutlined />
						</a>
						<a href="https://www.twitter.com" target="_blank" style={{ paddingLeft: 10, fontSize: '2em' }}>
							<TwitterOutlined />
						</a>
						<a href="https://www.youtube.com" target="_blank" style={{ paddingLeft: 10, fontSize: '2em' }}>
							<YoutubeOutlined />
						</a>
					</Col>
					<Divider />
					<Col span={7} offset={10}>
						<p> Molecule ©2020 Created by VHONX</p>
					</Col>

					{/* <Col span={5} offset={6}>
						<p> Molecule ©2020 Created by VHONX</p>
					</Col> */}
					{/* <Col span={4} offset={3}>
						<a href="https://www.facebook.com/free7dom/">
							<FacebookOutlined />
						</a>
						<a href="https://www.twitter.com" style={{ paddingLeft: 5 }}>
							<TwitterOutlined />
						</a>
						<a href="https://www.youtube.com">
							<YoutubeOutlined />
						</a>
					</Col> */}
				</Row>
				{/* <p> Molecule ©2020 Created by VHONX</p>
				<a href="https://www.facebook.com/free7dom/">
					<FacebookOutlined />
				</a> */}
			</Footer>
		</Layout>
	);
}

export default FooterComp;
