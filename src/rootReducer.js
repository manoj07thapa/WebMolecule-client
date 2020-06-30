import { combineReducers } from 'redux';
import user from './reducers/user';
import query from './reducers/query';
import blog from './reducers/blog';
import course from './reducers/course';

export default combineReducers({
	user,
	query,
	blog,
	course
});
