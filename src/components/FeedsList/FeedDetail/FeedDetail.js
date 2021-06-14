import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from '../../NavBar';
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import { ArticlesList } from './ArticlesList';

import articleIcon from '../../common/img/article-icon.svg';

const FeedDetail = ({ match }) => {
	const feedId = +match.params.feedId;
	const userFeeds = useSelector((state) => state.feeds.userFeeds);
	const allFeeds = useSelector((state) => state.feeds.allFeeds);

	const feed =
		allFeeds.find((item, i) => i === feedId) ||
		userFeeds.find((item) => item.id === feedId);

	const articlesArr = feed?.items || userFeeds;
	return (
		<>
			<NavBar />
			<Container className="my-5">
				<img
					src={feed?.feed?.img ? feed.feed.img : articleIcon}
					className="article-icon center-block"
					alt="Feed icon"
				></img>
				<h2 className="text-center">{feed?.feed?.title || feed?.title}</h2>
				<h5 className="text-center">{feed?.feed?.description || feed?.body}</h5>
				<ArticlesList title="Latest posts" arr={articlesArr} feedId={feedId} />
			</Container>
		</>
	);
};

export default withRouter(withAuthRedirect(FeedDetail));
