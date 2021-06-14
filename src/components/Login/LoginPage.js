import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { LoginForm } from './LoginForm';
import { SocialBox } from './SocialBox';

const LoginPage = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	if (isAuth) {
		return <Redirect to={'/feeds-list'} />;
	}
	return (
		<Container fluid className="aqua">
			<Row>
				<Col xs={12} xl={7} className="mt-4">
					<Row className="p-3">
						<Col lg={12} className="text-center">
							<h1 className="h1 font-weight-bold">More signal, less noise</h1>
						</Col>
						<Col lg={12} className="pictor-illustration"></Col>
					</Row>
				</Col>
				<Col xs={12} xl={5} className="p-md-5 pt-5 max-height bg-white">
					<h3 className="text-center font-weight-bold">Login to Your Account</h3>
					<h4 className="text-center my-4">
						Keep up with the topics and trends you care about, without the overwhelm
					</h4>
					<h4 className="text-center font-weight-bold my-4">We've missed you!</h4>
					<SocialBox />
					<LoginForm />
				</Col>
			</Row>
		</Container>
	);
};
export default LoginPage;
