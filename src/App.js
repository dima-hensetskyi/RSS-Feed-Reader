import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initializeApp } from './redux/actions/appActions';
import { Routers } from './Routers';
import Preloader from './components/common/preloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const feedsUrl = useSelector((state) => state.feeds?.feedsUrl);
	const userId = useSelector((state) => state.auth.userId);
	const initialized = useSelector((state) => state.app?.initialized);

	useEffect(() => {
		dispatch(initializeApp(feedsUrl, userId));
	}, []);

	if (!initialized) {
		return (
			<Container className="d-flex justify-content-center align-items-center preloader">
				<Preloader />
			</Container>
		);
	}
	return (
		<>
			<Routers />
		</>
	);
}

export default App;
