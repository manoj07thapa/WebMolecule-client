import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED } from '../types';

export default function user(state = [], action = {}) {
	switch (action.type) {
		case USER_FETCHED:
			return action.user;
		case USER_LOGGED_IN:
			return action.user;
		case USER_LOGGED_OUT:
			return {};
		default:
			return state;
	}
}
