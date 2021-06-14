import { SET_AUTH_USER_DATA } from '../types';

const initialState = {
	userId: null,
	userName: null,
	isAuth: false,
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
