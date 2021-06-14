export const getCorrectDate = (date) => {
	const dat = new Date(date);
	const options = {
		month: 'numeric',
		day: '2-digit',
		hour: '2-digit',
		minute: 'numeric',
	};
	return dat.toLocaleDateString('en-US', options);
};
