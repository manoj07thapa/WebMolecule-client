import api from '../api';
import { QUERY_FECHED, QUERY_ADDED } from '../types';

export const queryAdded = (result) => ({
	type: QUERY_ADDED,
	result
});

export const queryFeched = (query) => ({
	type: QUERY_FECHED,
	query
});

export const addQuery = (query) => (dispatch) =>
	api.contact.postQuery(query).then((result) => dispatch(queryAdded(result)));

export const fetchQuery = () => (dispatch) => api.contact.getQuery().then((query) => dispatch(queryFeched(query)));
