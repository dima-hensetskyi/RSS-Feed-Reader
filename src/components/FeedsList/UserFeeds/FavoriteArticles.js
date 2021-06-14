import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ArticlesList } from '../FeedDetail/ArticlesList';

const FavoriteArticles = ({ isAuth }) => {
	const favoriteArticles = useSelector((state) => state.feeds.favoriteArticles);
	if (!isAuth) {
		return (
			<Container fluid className="d-flex justify-content-center mt-5">
				<Link to="/login" className="link float-center">
					<h2>Please Login first to continue</h2>
				</Link>
			</Container>
		);
	}
	return (
		<Container fluid className="p-0 page">
			<Container>
				<h2 className="text-center my-3">Your Favorite Articles</h2>
				<ArticlesList arr={favoriteArticles} type="fav-articles" />
			</Container>
		</Container>
	);
};

export default FavoriteArticles;
