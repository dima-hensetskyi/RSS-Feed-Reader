import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setTabKey } from '../../redux/actions/appActions';

import { CommonFeeds } from './CommonFeeds';
import FavoriteArticles from './UserFeeds/FavoriteArticles';
import UserFeeds from './UserFeeds/UserFeeds';

export const ControlledTabs = () => {
	const key = useSelector((state) => state.app.tabKey);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();

	const setKey = (e) => {
		dispatch(setTabKey(e));
	};

	return (
		<Tabs id="controlled-tab-example" activeKey={key} onSelect={setKey}>
			<Tab eventKey="commonFeeds" title="Discover">
				<CommonFeeds />
			</Tab>
			<Tab eventKey="userFeeds" title={isAuth ? 'Your feeds' : 'User feeds'}>
				<UserFeeds isAuth={isAuth} />
			</Tab>
			<Tab eventKey="articles" title="Favorite articles">
				<FavoriteArticles isAuth={isAuth} />
			</Tab>
		</Tabs>
	);
};
