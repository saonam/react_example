import {requestPostJson, requestGetJson, requestPutJson} from './index.js';
import { jsonToQueryString } from '../utils/utils'

export const getPlaceList = (params) =>{
	let url = '3rdcms/places' + jsonToQueryString(params);
	console.log('getPlaceList: ', url);
	return dispatch =>{
		requestGetJson(url, function(response){
			dispatch({
				type: 'GET_LIST_PLACE',
				data: response.data
			})
		})
	}
}

