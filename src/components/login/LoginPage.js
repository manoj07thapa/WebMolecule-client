import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import FormikLogin from './FormikLogin';
import FooterComp from '../layouts/footer/FooterComp';

function LoginPage(props) {
	const dispatch = useDispatch();
	const submit = (data) => dispatch(login(data)).then(() => props.history.push('/dashboard'));
	return (
		<div>
			<FormikLogin submit={submit} />
			<FooterComp />
		</div>
	);
}

export default LoginPage;
