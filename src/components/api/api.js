import axios from 'axios';
const corsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
const authUrl = 'https://jsonplaceholder.typicode.com/users';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const feedsAPI = {
	async getFeedFromRss(url) {
		try {
			const resp = await axios.get(`${corsUrl}${url}`);
			return resp.data;
		} catch (e) {
			console.log(e);
			return e;
		}
	},
	async getUserFeeds(id) {
		try {
			const resp = await instance.get(`?userId=${id}`);
			return resp.data;
		} catch (e) {
			console.log(e);
		}
	},
	addFeed(feed) {
		try {
			return instance.post(``, feed).then((res) => res.status);
		} catch (e) {
			console.log(e);
		}
	},
	deleteFeed(id) {
		try {
			return instance.delete(`/${id}`).then((res) => res.status);
		} catch (e) {
			console.log(e);
		}
	},
};
export const authAPI = {
	authMe() {
		return localStorage.userData ? JSON.parse(localStorage.userData) : false;
	},
	async login(userName, password, rememberMe = false) {
		const payload = { userName, password, rememberMe };
		try {
			const resp = await axios.post(authUrl, payload);
			return resp;
		} catch (e) {
			console.log(e);
		}
	},
};
