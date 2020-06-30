import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchQuery } from '../../actions/query';

function ContactList() {
	const columns = [
		{
			title: 'Full Name',
			dataIndex: 'fullname',
			width: '20%',
			key: 'fullname'
		},
		{
			title: 'Email',
			dataIndex: 'email',
			width: '20%',
			key: 'email'
		},
		{
			title: 'Phone Number',
			dataIndex: 'phoneNumbers',
			width: '20%',
			key: 'phoneNumbers'
		},
		{
			title: 'Customer',
			dataIndex: 'customer',
			width: '20%',
			key: 'customer'
		},
		{
			title: 'Student',
			dataIndex: 'student',
			width: '20%',
			key: 'student'
		},
		{
			title: 'Query',
			dataIndex: 'query',
			width: '20%',
			key: 'query'
		}
	];
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchQuery());
	}, []);
	const data = useSelector((state) => state.query);
	console.log(data);

	const result = data.map((item) => ({
		key: item._id,
		fullname: item.fullname,
		email: item.email,
		phoneNumbers: item.phoneNumbers,
		customer: item.customer,
		student: item.student,
		query: item.query
	}));

	return <Table columns={columns} dataSource={result} />;
}

export default ContactList;
