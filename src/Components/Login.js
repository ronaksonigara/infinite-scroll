import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import {
	LoginContainer,
	Input,
	Title,
	InputContainer,
	Error,
	Button,
	Note
} from '../styles/login';

import { usernameValidation, passwordValidation } from '../utils/validataion';

const isDisabled = (credentials, error) => {
	if (
		credentials.username &&
		credentials.password &&
		!error.username &&
		!error.password
	) {
		return false;
	}
	return true;
};

const Login = () => {
	const history = useHistory();

	const [credentials, setCredential] = useState({ username: '', password: '' });
	const [error, setError] = useState({ username: '', password: '' });
	const onInputChange = (event) => {
		const { name, value } = event.target;
		setCredential((prev) => ({ ...prev, [name]: value }));
		if (error[name]) {
			setError((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const handleLogin = () => {
		const username = usernameValidation(credentials.username);
		if (username) {
			setError((prev) => ({ ...prev, username }));
			return;
		} else {
			const password = passwordValidation(credentials.password);
			if (password) {
				setError((prev) => ({ ...prev, password }));
				return;
			}
		}
		localStorage.setItem('isUserAuthenticate', true);
		history.push('/home');
	};

	return (
		<>
			{localStorage.getItem('isUserAuthenticate') && <Redirect to='/home' />}
			<LoginContainer>
				<Title>Login</Title>
				<InputContainer>
					<Input
						type='text'
						name='username'
						onChange={onInputChange}
						value={credentials.username}
						error={error.username}
						autoComplete='off'
						autoFocus
						placeholder='Username'
					/>
					{error.username && <Error>{error.username}</Error>}
				</InputContainer>
				<InputContainer>
					<Input
						type='password'
						name='password'
						onChange={onInputChange}
						value={credentials.password}
						error={error.password}
						autoComplete='off'
						placeholder='Password'
					/>

					{error.password && <Error>{error.password}</Error>}
				</InputContainer>
				<Button disabled={isDisabled(credentials, error)} onClick={handleLogin}>
					Login
				</Button>

				<Note>
					<b>Note:</b> This is dummy Login, use{' '}
					<strong>
						Username: <u>foo</u>
					</strong>
					&nbsp; and &nbsp;
					<strong>
						Password: <u>bar</u>
					</strong>
				</Note>
			</LoginContainer>
		</>
	);
};

export default Login;
