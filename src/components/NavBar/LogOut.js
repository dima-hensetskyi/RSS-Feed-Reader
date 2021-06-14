import { useDispatch, useSelector } from 'react-redux';
import { setAuthUserData } from '../../redux/actions/loginAction';

export const LogOut = () => {
	const userName = useSelector((state) => state.auth.userName);
	const dispatch = useDispatch();

	const onLogOut = () => {
		localStorage.removeItem('userData');
		dispatch(setAuthUserData(null, null, false));
	};
	return (
		<>
			<h4>Hello, {userName}!</h4>
			<button className="button p-1 px-2" onClick={onLogOut}>
				Logout
			</button>
		</>
	);
};
