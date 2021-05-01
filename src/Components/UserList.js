import { useRef, useState, useCallback, useEffect, forwardRef } from 'react';
import { useHistory } from 'react-router-dom';

import { makeData } from '../utils/makeData';
import Gravatar from 'react-gravatar';

import {
	Wrapper,
	ListWrapper,
	USerItem,
	GravatarWrapper,
	DetailsWrapper,
	Details,
	SkeletonWrapper,
	SkeletonBox,
	SkeletonImg,
	Button,
	Logout
} from '../styles/userList';

const UserRow = forwardRef(({ email, name, age }, ref) => {
	return (
		<USerItem ref={ref}>
			<GravatarWrapper>
				<Gravatar email={email} size={100} />
			</GravatarWrapper>
			<DetailsWrapper>
				<Details>
					<b>Name: </b>
					{name}
				</Details>
				<Details>
					<b>Email: </b>
					{email}
				</Details>
				<Details>
					<b>Age: </b>
					{age}
				</Details>
			</DetailsWrapper>
		</USerItem>
	);
});

const UserList = () => {
	const history = useHistory();

	const observer = useRef();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const lastListElement = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	useEffect(() => {
		if (pageNumber > 10) {
			setHasMore(false);
			return;
		}
		setLoading(true);
		setTimeout(() => {
			setData((prev) => [...prev, ...makeData(pageNumber, 30)]);
			setLoading(false);
		}, 1000);
	}, [pageNumber]);

	const handleLogout = () => {
		localStorage.removeItem('isUserAuthenticate');
		history.push('/');
	};

	return (
		<Wrapper>
			<Logout>
				<Button onClick={handleLogout}>Logout</Button>
			</Logout>
			<ListWrapper>
				{data.map((user, index) => {
					if (data.length === index + 1) {
						return (
							<UserRow
								ref={lastListElement}
								key={user.email}
								name={user.name}
								age={user.age}
								email={user.email}
							/>
						);
					}
					return (
						<UserRow
							key={user.email}
							name={user.name}
							age={user.age}
							email={user.email}
						/>
					);
				})}
				{loading &&
					Array.from({ length: 5 }).map((_, i) => (
						<SkeletonWrapper key={i}>
							<SkeletonImg />
							<DetailsWrapper>
								<SkeletonBox />
								<SkeletonBox />
								<SkeletonBox />
							</DetailsWrapper>
						</SkeletonWrapper>
					))}
			</ListWrapper>
		</Wrapper>
	);
};

export default UserList;
