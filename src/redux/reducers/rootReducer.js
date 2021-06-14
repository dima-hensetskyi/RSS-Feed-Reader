import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { feedsReducer } from './feedsReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
	auth: loginReducer,
	feeds: feedsReducer,
	app: appReducer,
});
export default rootReducer;
