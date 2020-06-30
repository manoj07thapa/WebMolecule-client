import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/users';
import FormikSignup from './FormikSignup';

function SignupPage(props) {
	const dispatch = useDispatch();
	const submit = (data) => dispatch(signup(data)).then(() => props.history.push('/dashboard'));
	return (
		<div>
			<FormikSignup submit={submit} />
		</div>
	);
}

export default SignupPage;
