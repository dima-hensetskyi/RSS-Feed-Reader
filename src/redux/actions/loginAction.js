import { authAPI } from '../../components/api/api';
import { SET_AUTH_USER_DATA } from '../types';

export const setAuthUserData = (userId, userName, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	payload: { userId, userName, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
	const resp = authAPI.authMe();
	if (resp) {
		dispatch(setAuthUserData(resp.userId, resp.name, true));
	}
};

export const LogIn = (userName, password, rememberMe) => async (dispatch) => {
	const resp = await authAPI.login(userName, password, rememberMe);
	if (resp.status === 201) {
		localStorage.userData = JSON.stringify({
			name: resp.data.userName,
			password: resp.data.password,
			rememberMe: resp.data.rememberMe,
			userId: resp.data.id,
		});
		dispatch(getAuthUserData());
	}
};
