import api from '../api';
import { BLOG_ADDED, BLOG_FETCHED } from '../types';

export const blogAdded = (blog) => ({
	type: BLOG_ADDED,
	blog
});

export const blogFetched = (blog) => ({
	type: BLOG_FETCHED,
	blog
});

export const addBlog = (content) => (dispatch) => api.blog.postBlog(content).then((blog) => dispatch(blogAdded(blog)));

export const fetchBlog = () => (dispatch) => api.blog.getBlog().then((blog) => dispatch(blogFetched(blog)));
