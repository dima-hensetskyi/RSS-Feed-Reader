import { Alert } from 'react-bootstrap';

export const Alerts = ({ type, content }) => {
	return (
		<Alert variant={type} className="alert">
			{content}
		</Alert>
	);
};
