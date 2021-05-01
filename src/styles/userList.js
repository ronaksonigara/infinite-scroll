import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Logout = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	flex-direction: row-reverse;
`;

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1024px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const USerItem = styled.div`
	display: flex;
	padding: 10px;
	overflow: hidden;
	@media (min-width: 1024px) {
		flex-direction: column;
		width: calc(100% / 4);
	}
`;

export const GravatarWrapper = styled.div`
	display: flex;
	margin-right: 10px;
	@media (min-width: 1024px) {
		margin-right: 0;
		margin-bottom: 10px;
	}
`;
export const DetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	font-size: 16px;
`;
export const Details = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	&:not(:last-child) {
		margin-bottom: 5px;
	}
`;

export const SkeletonWrapper = styled(USerItem)``;

const shine = keyframes`
  to {
    background-position: 100% 0;
  }
`;

const Skeleton = () => css`
	background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
		),
		lightgray;
	background-repeat: repeat-y;
	background-size: 50px 500px;
	background-position: 0 0;
	animation: ${shine} 1s infinite;
`;

export const SkeletonImg = styled(GravatarWrapper)`
	width: 100px;
	height: 100px;
	${Skeleton};
`;

export const SkeletonBox = styled(Details)`
	width: 100%;
	height: 20px;
	${Skeleton};
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
