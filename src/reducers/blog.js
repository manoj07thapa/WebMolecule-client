import { BLOG_ADDED, BLOG_FETCHED } from '../types';

export default function blog(state = [], action = {}) {
	switch (action.type) {
		case BLOG_ADDED:
			return [ ...state, action.blog ];
		case BLOG_FETCHED:
			return action.blog;
		default:
			return state;
	}
}
