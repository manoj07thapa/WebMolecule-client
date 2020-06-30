import api from '../api';
import { userLoggedIn } from './auth';

export const signup = (data) => (dispatch) =>
	api.user.signup(data).then((user) => {
		localStorage.moleculeJWT = user.token;

		dispatch(userLoggedIn(user));
	});
