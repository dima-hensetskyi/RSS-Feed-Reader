import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import FeedsPage from './components/FeedsList/FeedsPage';
import FeedDetail from './components/FeedsList/FeedDetail/FeedDetail';
import ArticleDetail from './components/FeedsList/FeedDetail/ArticleDetail';

export const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/feeds-list" component={FeedsPage} />
				<Route path="/feed-detail/:feedId" exact component={FeedDetail} />
				<Route path="/article/:feedId/:articleId" component={ArticleDetail} />
				<Route path="/" component={LoginPage} />
			</Switch>
		</Router>
	);
};
