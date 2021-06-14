import { Container } from 'react-bootstrap';
import socialIcon1 from '../common/img/social-icon-1.svg';
import socialIcon2 from '../common/img/social-icon-2.svg';
import socialIcon3 from '../common/img/social-icon-3.svg';

export const SocialBox = () => (
	<Container className="my-4 text-center">
		<img
			src={socialIcon1}
			className="mx-1 mx-lg-3"
			alt="Login with Google."
			className="login-link"
		/>
		<img
			src={socialIcon2}
			className="mx-1 mx-lg-3"
			alt="Login with Facebook."
			className="login-link"
		/>
		<img
			src={socialIcon3}
			className="mx-1 mx-lg-3"
			alt="Login with Apple."
			className="login-link"
		/>
	</Container>
);
