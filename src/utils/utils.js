import moment from 'moment'

export const stringToDate = (date, format) => {
	return moment(date, format).toDate();
}

export const dateToString = (date, format) => {
	return moment(date).format(format)
}

export const jsonToQueryString = (json) => {
	return '?' +
		Object.keys(json).map(function (key) {
			return encodeURIComponent(key) + '=' +
				encodeURIComponent(json[key]);
		}).join('&');
}

