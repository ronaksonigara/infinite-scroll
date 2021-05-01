import namor from 'namor';

const newPerson = () => {
	const name = namor.generate({ saltLength: 0, separator: ' ' });
	return {
		name,
		age: Math.floor(Math.random() * 30),
		email: `${name.replace(' ', '_')}@abc.com`
	};
};

export const makeData = (page, size) => {
	return Array.from({ length: size }, (_, index) => ({
		...newPerson(),
		id: (page - 1) * size + (index + 1)
	}));
};
