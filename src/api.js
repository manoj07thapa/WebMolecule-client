import axios from 'axios';
export default {
	user: {
		getUser: () => axios.get('/api/auth').then((res) => res.data.user),

		login: (credentials) => axios.post('/api/auth', { credentials }).then((res) => res.data.userRecord),
		signup: (user) => axios.post('/api/users', { user }).then((res) => res.data.user)
	},
	contact: {
		getQuery: () => axios.get('/api/queries').then((res) => res.data.query),
		postQuery: (query) => axios.post('/api/queries', { query }).then((res) => res.data.query)
	},
	blog: {
		postBlog: (content) => axios.post('/api/blog', { content }).then((res) => res.data.contentRecord),
		getBlog: () => axios.get('/api/blog').then((res) => res.data.blog)
	},
	course: {
		postCourse: (content) => axios.post('/api/course', { content }).then((res) => res.data.courseRecord),

		getCourse: () => axios.get('/api/course').then((res) => res.data.course)
	}
};
