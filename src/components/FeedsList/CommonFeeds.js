import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { FeedCard } from './Cards';

export const CommonFeeds = () => {
	const commonFeeds = useSelector((state) => state.feeds?.commonFeeds);
	const allFeeds = useSelector((state) => state.feeds?.allFeeds);
	return (
		<>
			<h2 className="text-center my-3">Top feeds</h2>
			<Row>
				{commonFeeds.map((data) => {
					const i = allFeeds.findIndex((e) => e.feed?.title === data.feed?.title);
					return (
						<FeedCard
							id={i}
							title={data.feed?.title}
							description={data.feed?.description}
							img={data.feed?.image}
							key={uuidv4()}
						/>
					);
				})}
			</Row>
		</>
	);
};
