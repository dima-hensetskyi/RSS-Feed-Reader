export const updateLocalStorage = (key, type, newObj) => {
	const arr = JSON.parse(localStorage.getItem(`${key}`)) || [];
	if (type === 'add') {
		arr.push(newObj);
		localStorage[key] = JSON.stringify(arr);
	} else {
		const newArr = arr.filter((item) => {
			return item.title !== newObj.title;
		});
		localStorage[key] = JSON.stringify(newArr);
	}
};
