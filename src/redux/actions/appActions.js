import { INITIALIZED_SUCCESS, SET_SHOW_ALERT, SET_TAB_KEY } from '../types';
import { getCommonFeeds, getUserFeeds } from './feedPageActions';
import { getAuthUserData } from './loginAction';

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = (feedsUrl, id) => async (dispatch) => {
	await dispatch(getCommonFeeds(feedsUrl));
	await dispatch(getAuthUserData());
	await dispatch(getUserFeeds(id));
	setTimeout(() => dispatch(initializedSuccess()), 1000);
};

export const setShowAlert = (value) => ({
	type: SET_SHOW_ALERT,
	payload: value,
});

export const setTabKey = (key) => ({
	type: SET_TAB_KEY,
	key,
});
