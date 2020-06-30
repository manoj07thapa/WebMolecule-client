import { QUERY_FECHED, QUERY_ADDED } from '../types';

export default function contact(state = [], action = {}) {
	switch (action.type) {
		case QUERY_ADDED:
			return [ ...state, action.result ];
		case QUERY_FECHED:
			return action.query;
		default:
			return state;
	}
}
