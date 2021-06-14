import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { LogIn } from '../../redux/actions/loginAction';

export const LoginForm = () => {
	const [userName, setUserName] = useState('GordonFreeman');
	const [password, setPassword] = useState('12345Freeman');
	const [rememberMe, setRememberMe] = useState(true);

	const dispatch = useDispatch();

	const onSubmit = () => {
		dispatch(LogIn(userName, password, rememberMe));
	};
	const onChange = (e) => {
		return e.target.value;
	};
	return (
		<Form className="mx-md-5">
			<Form.Group className="my-4" controlId="formBasicEmail">
				<Form.Label>User name:</Form.Label>
				<Form.Control
					type="email"
					placeholder="User name"
					value={userName}
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group className="my-4" controlId="formBasicPassword">
				<Form.Label>Password:</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					value={password}
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group className="my-4" controlId="formBasicCheckbox">
				<Form.Check
					type="checkbox"
					label="Remember me"
					checked={rememberMe}
					onChange={onChange}
				/>
			</Form.Group>
			<Button variant="primary" onClick={onSubmit}>
				Submit
			</Button>
		</Form>
	);
};
