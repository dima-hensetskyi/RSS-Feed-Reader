import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import NavBar from '../../NavBar';
import {
	addArticle,
	deleteArticle,
} from '../../../redux/actions/feedPageActions';
import { getCorrectDate } from '../../utils/getCorrectDate';

import { favoriteIcon, copyLinkIcon, deleteIcon } from '../../common/img';

const ArticleDetail = ({ match }) => {
	const dispatch = useDispatch();
	const favoriteArticles = useSelector((state) => state.feeds.favoriteArticles);

	const articleId = +match.params.articleId;
	const feedId = +match.params.feedId;

	const article = useSelector(
		(state) =>
			state.feeds?.allFeeds[feedId]?.items?.find(
				(item, i) => i === articleId || item.id === articleId
			) || state.feeds.userFeeds?.find((item) => item.id === articleId)
	);

	const favoriteArticle = favoriteArticles.some(
		(item) => article?.title === item?.title
	);

	const onAddArticle = () => {
		if (!favoriteArticle) {
			dispatch(addArticle({ ...article, feedId }));
		}
	};

	const onDelete = () => {
		if (favoriteArticle) {
			dispatch(deleteArticle({ ...article, feedId }));
		}
	};

	const articleImg = article?.enclosure?.link || article?.enclosure?.thumbnail;

	const regExp = /<\/?[a-z][\s\S]*>/i;
	const isHtml = regExp.test(article?.content);
	const createMarkup = () => {
		if (isHtml) {
			return {
				__html: `${article.content}`,
			};
		}
	};
	const setPhoto = articleImg && !isHtml;

	return (
		<Container fluid className="bg-light page p-0">
			<NavBar />
			<Container>
				<Container className="py-5">
					<Row className="d-flex justify-content-center">
						{setPhoto && (
							<Col
								xs={10}
								lg={6}
								style={{
									backgroundImage: `url(${articleImg})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									minHeight: `300px`,
								}}
							></Col>
						)}
						<Col className="text-center">
							<Row>
								<Col xs={12}>
									<h2 className="mt-3 mb-0 pb-3 border-bottom border-black">
										{article?.title}
									</h2>
									<span className="float-left ml-5">
										{favoriteArticle ? (
											<img
												src={deleteIcon}
												alt="Delete article from favorite list"
												onClick={onDelete}
												className="icon"
												title="Delete article from favorite list"
											/>
										) : (
											<img
												src={favoriteIcon}
												alt="Add article to favorite list"
												onClick={onAddArticle}
												className="icon"
												title="Add article to favorite list"
											/>
										)}
										<img src={copyLinkIcon} alt="Copy link on article" className="icon" />
									</span>
									<h6 className="float-right mr-md-5 my-2 ">
										{getCorrectDate(article?.pubDate)}
									</h6>
								</Col>
								<Col className="mx-3 px-3 text-justify border-top border-black">
									{isHtml ? (
										<div
											className="html-content mt-3"
											dangerouslySetInnerHTML={createMarkup()}
										/>
									) : (
										<p className="mx-md-4 mt-3">{article?.content || article?.body}</p>
									)}
									{article?.link && (
										<a href={article?.link} className="link float-left">
											<h6>Read More</h6>
										</a>
									)}
									{article?.author && (
										<h6 className="float-right mr-md-2">By {article?.author}</h6>
									)}
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	);
};
export default withRouter(withAuthRedirect(ArticleDetail));
