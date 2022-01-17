import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>email:</span>
					<input
						required
						type='email'
						onChange={e => setEmail(e.target.value)}
						values={email}
					/>
				</label>
				<label>
					<span>password:</span>
					<input
						required
						type='password'
						onChange={e => setPassword(e.target.value)}
						values={password}
					/>
				</label>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
