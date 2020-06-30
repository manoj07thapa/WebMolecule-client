import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});

export const userFetched = (user) => ({
	type: USER_FETCHED,
	user
});

export const fetchUser = () => (dispatch) => api.user.getUser().then((user) => dispatch(userFetched(user)));

export const login = (credentials) => (dispatch) =>
	api.user.login(credentials).then((user) => {
		localStorage.setItem('user', JSON.stringify(user));
		dispatch(userLoggedIn(user));
	});

export const logout = () => (dispatch) => {
	localStorage.clear();
	dispatch(userLoggedOut());
};
