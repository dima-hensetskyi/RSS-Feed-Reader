import { ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { ArticleCard } from '../Cards';
import { getCorrectDate } from '../../utils/getCorrectDate';

export const ArticlesList = ({ title, arr, feedId }) => (
	<>
		<h5 className="ml-5 my-4">{title}</h5>
		<ListGroup variant="flush" className="mx-lg-5">
			{arr?.map((article, i) => (
				<ArticleCard
					title={article.title}
					date={article.pubDate && getCorrectDate(article.pubDate)}
					key={uuidv4()}
					id={article.id || i}
					feedId={feedId}
				/>
			))}
		</ListGroup>
	</>
);
