import { feedsAPI } from '../../components/api/api';
import { updateLocalStorage } from '../../components/utils/updateLocalStorage';
import {
	DELETE_FEED,
	GET_COMMON_FEEDS,
	GET_USER_FEEDS,
	ADD_FEED_TO_USER_FEEDS,
	ADD_ARTICLE_TO_FAVORITE_LIST,
	DELETE_ARTICLE,
	ADD_NEW_FEED,
} from '../types';
import { setShowAlert } from './appActions';

export const getCommonFeeds = (feedsUrlArr) => (dispatch) => {
	feedsUrlArr.map(async (url) => {
		const data = await feedsAPI.getFeedFromRss(url);
		const feed = data?.feed;
		const items = data?.items;
		dispatch({ type: GET_COMMON_FEEDS, payload: { feed, items } });
	});
};
export const getUserFeeds = (id) => async (dispatch) => {
	const data = await feedsAPI.getUserFeeds(id);
	dispatch({ type: GET_USER_FEEDS, payload: data });
};

export const addFeed = (feed) => async (dispatch) => {
	const resp = await feedsAPI.addFeed(feed);
	if (resp === 201) {
		dispatch({ type: ADD_FEED_TO_USER_FEEDS, payload: feed });
		dispatch(
			setShowAlert({
				type: 'success',
				text: 'Feed successfully added',
				show: true,
			})
		);
		updateLocalStorage('userFeeds', 'add', feed);
		setTimeout(() => dispatch(setShowAlert(null)), 3000);
	}
};

export const createFeed = (url, userId, id) => async (dispatch) => {
	const data = await feedsAPI.getFeedFromRss(url);
	if (data.status === 'ok' || data.status === 200) {
		const feed = {
			title: data.feed.title,
			body: data.feed.description,
			userId,
			id,
			items: data.items,
		};
		dispatch(addFeed(feed));
		dispatch({ type: ADD_NEW_FEED, payload: feed });
	} else {
		dispatch(
			setShowAlert({
				type: 'warning',
				text: 'Something went wrong',
				show: true,
			})
		);
		setTimeout(() => dispatch(setShowAlert(null)), 5000);
	}
};

export const deleteFeed = (id, title) => async (dispatch) => {
	const resp = await feedsAPI.deleteFeed(id);
	if (resp === 200) {
		dispatch({ type: DELETE_FEED, title });
		dispatch(
			setShowAlert({
				type: 'warning',
				text: 'Feed successfully deleted',
				show: true,
			})
		);
		const feed = { id, title };
		updateLocalStorage('userFeeds', 'delete', feed);
		setTimeout(() => dispatch(setShowAlert(null)), 3000);
	}
};

export const addArticle = (article) => {
	updateLocalStorage('favoriteArticles', 'add', article);
	return {
		type: ADD_ARTICLE_TO_FAVORITE_LIST,
		payload: article,
	};
};
export const deleteArticle = (article) => {
	updateLocalStorage('favoriteArticles', 'delete', article);
	return { type: DELETE_ARTICLE, article };
};
