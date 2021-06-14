import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addFeed, deleteFeed } from '../../redux/actions/feedPageActions';

import { addIcon, deleteIcon, articleIcon } from '../common/img/';

export const CardActions = ({ id, title, body }) => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.userId);
	const userFeeds = useSelector((state) => state.feeds.userFeeds);

	const recheck = userFeeds.some((feed) => feed.title === title);

	const onAddFeed = () => {
		if (!recheck) {
			const feed = {
				userId,
				id,
				title,
				body,
			};
			dispatch(addFeed(feed));
		}
	};

	const onDeleteFeed = () => {
		dispatch(deleteFeed(id, title));
	};

	return (
		<span className="pl-3 border-top">
			{recheck ? (
				<img
					src={deleteIcon}
					alt="Delete feed from favorite list"
					onClick={onDeleteFeed}
					className="icon"
					title="Delete feed from favorite list"
				/>
			) : (
				<img
					src={addIcon}
					alt="Add feed to favorite list"
					onClick={onAddFeed}
					className="icon"
					title="Add feed to favorite list"
				/>
			)}
		</span>
	);
};

export const FeedCard = ({ id, img, title, description, type }) => (
	<Col sm={6} lg={4} className="my-2">
		<Card className="bg-light card">
			<Link to={`feed-detail/${id}`} className="link">
				<Card.Header>
					{
						<img
							src={img ? img : articleIcon}
							className="article-icon"
							alt="Feed icon"
						/>
					}
				</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text className="text-justify">{description}</Card.Text>
				</Card.Body>
			</Link>
			<CardActions id={id} title={title} body={description} type={type} />
		</Card>
	</Col>
);

export const ArticleCard = ({ title, id, date, feedId }) => (
	<ListGroup.Item>
		<Row>
			<Col md={9}>
				<Link to={`/article/${feedId}/${id}`} className="link">
					{title}
				</Link>
			</Col>
			<Col md={3}>
				<span className="float-md-right text-secondary">{date}</span>
			</Col>
		</Row>
	</ListGroup.Item>
);
