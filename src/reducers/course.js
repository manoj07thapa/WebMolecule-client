import { COURSE_ADDED, COURSE_FETCHED } from '../types';

export default function course(state = [], action = {}) {
	switch (action.type) {
		case COURSE_ADDED:
			return [ ...state, action.course ];
		case COURSE_FETCHED:
			return action.course;
		default:
			return state;
	}
}
