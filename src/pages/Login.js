import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const { error, login } = useLogin();

	const handleSubmit = e => {
		e.preventDefault();
		login(email, password);
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
        {error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Login;
