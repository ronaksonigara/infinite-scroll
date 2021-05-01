export const usernameValidation = (value) => {
	if (!value.trim()) {
		return 'Username is required';
	} else if (value !== 'foo') {
		return 'Invalid Username';
	}
	return '';
};

export const passwordValidation = (value) => {
	if (!value.trim()) {
		return 'Password is required';
	} else if (value !== 'bar') {
		return 'Invalid Password';
	}
	return '';
};
