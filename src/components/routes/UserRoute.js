import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserRoute({ component: Component, ...rest }) {
	const isAuthenticated = useSelector((state) => !!state.user.token);
	return <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default UserRoute;
