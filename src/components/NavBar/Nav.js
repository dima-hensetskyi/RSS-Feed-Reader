import { Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOut } from './LogOut';

export const NavBar = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	return (
		<Navbar sticky="top" className="aqua" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/feeds-list" className="link">
						<h2 className="font-weight-bold">Feed Reader</h2>
					</Link>
				</Navbar.Brand>
				{isAuth && (
					<>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
							<LogOut />
						</Navbar.Collapse>
					</>
				)}
				{!isAuth && <Link to="/login">Login</Link>}
			</Container>
		</Navbar>
	);
};
