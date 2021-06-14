import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { FeedCard } from '../Cards';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import { createFeed } from '../../../redux/actions/feedPageActions';

const UserFeeds = ({ isAuth }) => {
	const [url, setUrl] = useState('');

	const dispatch = useDispatch();
	const usersFeeds = useSelector((state) => state.feeds.userFeeds);
	const userId = useSelector((state) => state.auth.userId);
	const allFeeds = useSelector((state) => state.feeds.allFeeds);
	const id = allFeeds.length;

	if (!isAuth) {
		return (
			<Container fluid className="d-flex justify-content-center mt-5">
				<Link to="/login" className="link float-center">
					<h2>Please Login first to continue</h2>
				</Link>
			</Container>
		);
	}
	const onClick = () => {
		dispatch(createFeed(url, userId, id));
		setUrl('');
	};
	return (
		<>
			<label htmlFor="basic-addon2">
				<h5 className="mt-3">Create RSS Feeds</h5>
			</label>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Enter RSS URL"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					autoFocus
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary" onClick={onClick}>
						Create
					</Button>
				</InputGroup.Append>
			</InputGroup>
			<h2 className="text-center my-3">Your feeds</h2>
			<Row>
				{usersFeeds.map((data, i) => (
					<FeedCard
						id={data.id || i}
						title={data.title || data.feed?.title}
						description={data.body || data.feed?.description}
						img={data.image || data?.feed?.image}
						key={uuidv4()}
						type={'user-feed'}
					/>
				))}
			</Row>
		</>
	);
};

export default UserFeeds;
