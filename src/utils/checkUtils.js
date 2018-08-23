export function checkSimpleMobilePhone (phone = '') {
	return (/^1\d{10}$/.test(phone))
}

export default {}
