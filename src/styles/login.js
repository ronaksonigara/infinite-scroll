import styled from 'styled-components';

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const Title = styled.h1`
	margin-top: 0;
	margin-bottom: 20px;
	font-size: 24px;
	line-height: 26px;
`;

export const Input = styled.input`
	font-size: 16px;
	padding: 10px;
	border-radius: 4px;
	outline: none;
	border: 1px solid ${(props) => (props.error ? '#f00' : '#ccc')};
	background: transparent;
	color: #000;
	margin-bottom: ${(props) => (props.error ? 0 : '30px')};
`;
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Error = styled.p`
	margin-top: 7px;
	margin-bottom: 7px;

	font-size: 14px;
	color: #f00;
`;
export const Button = styled.button`
	font-size: 16px;
	padding: 10px;
	background-color: #000;
	color: #fff;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;
	min-width: 150px;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

export const Note = styled.p`
	font-size: 16px;
	color: #000;
`;
