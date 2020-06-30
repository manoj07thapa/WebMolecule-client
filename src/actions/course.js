import api from '../api';
import { COURSE_ADDED, COURSE_FETCHED } from '../types';

export const courseAdded = (course) => ({
	type: COURSE_ADDED,
	course
});

export const courseFetched = (course) => ({
	type: COURSE_FETCHED,
	course
});
// export const addCourse = (content) => console.log(content);

export const addCourse = (content) => (dispatch) =>
	api.course.postCourse(content).then((course) => dispatch(courseAdded(course)));

export const fetchCourse = () => (dispatch) => api.course.getCourse().then((course) => dispatch(courseFetched(course)));
