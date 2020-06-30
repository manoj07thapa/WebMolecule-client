import React from 'react';
import { Row, Col } from 'antd';
import { useDispatch } from 'react-redux';

import { addQuery } from '../../actions/query';
import FormikContact from './FormikContact';

function ContactPage(props) {
	const dispatch = useDispatch();
	const submit = (data) => dispatch(addQuery(data)).then(() => props.history.push('/greetings'));

	return (
		<Row gutter={80} style={{ margin: 30 }}>
			<Col className="gutter-row" span={10}>
				<div style={{ background: 'lightgrey', padding: '20px,0', color: 'white' }}>
					<h2>Contact Us</h2>
					<p>Mob No:9863715907</p>
					<p>Email: juvenial777@gmail.com</p>
					<p>Address: Gtthaghar Bhaktapur</p>
				</div>
			</Col>
			<Col className="gutter-row" span={14}>
				<FormikContact submit={submit} />
			</Col>
		</Row>
	);
}

export default ContactPage;
