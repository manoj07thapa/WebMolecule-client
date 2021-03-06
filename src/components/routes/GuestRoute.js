import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GuestRoute({ component: Component, ...rest }) {
	const isAuthenticated = useSelector((state) => !!state.user.token);
	return (
		<Route
			{...rest}
			render={(props) => (!isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />)}
		/>
	);
}

export default GuestRoute;
