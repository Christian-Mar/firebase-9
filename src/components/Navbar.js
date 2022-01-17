import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
		<nav>
			<h1>My reading list</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/signup'>Signup</Link>
				</li>
        <li>Logout</li>
			</ul>
		</nav>
	);
}

export default Navbar
