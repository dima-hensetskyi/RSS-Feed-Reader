import { INITIALIZED_SUCCESS, SET_SHOW_ALERT, SET_TAB_KEY } from '../types';

const initialState = {
	initialized: false,
	tabKey: 'commonFeeds',
	alert: {
		show: false,
		type: null,
		text: null,
	},
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true };
		case SET_SHOW_ALERT:
			return { ...state, alert: action.payload };
		case SET_TAB_KEY:
			return { ...state, tabKey: action.key };
		default:
			return state;
	}
};
