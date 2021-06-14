import {
	GET_COMMON_FEEDS,
	GET_USER_FEEDS,
	DELETE_FEED,
	ADD_FEED_TO_USER_FEEDS,
	ADD_ARTICLE_TO_FAVORITE_LIST,
	DELETE_ARTICLE,
	ADD_NEW_FEED,
} from '../types';

const initialState = {
	feedsUrl: [
		'https://insideevs.com/rss/make/tesla/',
		'https://www.mobileworldlive.com/latest-stories/feed/',
		'http://www.newyorker.com/feed/humor',
		'https://www.nasa.gov/rss/dyn/breaking_news.rss',
		'http://feeds.bbci.co.uk/news/rss.xml',
		'https://www.reddit.com/.rss',
	],
	commonFeeds: [],
	userFeeds: JSON.parse(localStorage.getItem('userFeeds')) || [],
	favoriteArticles: JSON.parse(localStorage.getItem('favoriteArticles')) || [],
	allFeeds: [],
};

export const feedsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMMON_FEEDS:
			return {
				...state,
				...state.commonFeeds.push(action.payload),
				allFeeds: [...state.allFeeds, action.payload],
			};
		case GET_USER_FEEDS:
			return {
				...state,
				userFeeds: [...state.userFeeds, ...action.payload],
				allFeeds: [...state.allFeeds, ...action.payload, ...state.userFeeds],
			};
		case ADD_FEED_TO_USER_FEEDS:
			return { ...state, ...state.userFeeds.push(action.payload) };
		case ADD_NEW_FEED:
			return { ...state, ...state.allFeeds.push(action.payload) };
		case DELETE_FEED:
			return {
				...state,
				userFeeds: state.userFeeds.filter((item) => item.title !== action.title),
				allFeeds: state.allFeeds.filter((item) => item.title !== action.title),
			};
		case ADD_ARTICLE_TO_FAVORITE_LIST:
			return {
				...state,
				favoriteArticles: [...state.favoriteArticles, action.payload],
			};
		case DELETE_ARTICLE:
			return {
				...state,
				favoriteArticles: state.favoriteArticles.filter(
					(item) => item.title !== action.article.title
				),
			};
		default:
			return state;
	}
};
