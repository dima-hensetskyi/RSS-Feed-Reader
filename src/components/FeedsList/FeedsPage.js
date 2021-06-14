import { Container, Row, Col } from 'react-bootstrap';

import NavBar from '../NavBar';
import { ControlledTabs } from './ControlledTabs';
import { Alerts } from '../common/alerts/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { setTabKey } from '../../redux/actions/appActions';

const FeedsPage = () => {
	const alert = useSelector((state) => state.app.alert);
	const dispatch = useDispatch();
	const toCreateFeed = () => {
		dispatch(setTabKey('userFeeds'));
	};
	return (
		<>
			<NavBar />
			<Container fluid className="aqua">
				<Container>
					<Row>
						<Col lg={4} className="pl-0 pb-5 pr-5 order-2 order-lg-1">
							<h3 className="py-3">Take back control of your news feed</h3>
							<h5 className="text-secondary">
								Discover, share and read the best on the web
							</h5>
							<button className="button p-2 px-3 my-3" onClick={toCreateFeed}>
								Create a feed
							</button>
						</Col>
						<Col lg={8} className="promo-hero order-1 order-lg-2"></Col>
					</Row>
				</Container>
			</Container>
			<Container className="my-5">
				<ControlledTabs />
			</Container>
			{<Alerts type={alert?.type} content={alert?.text} />}
		</>
	);
};
export default FeedsPage;
