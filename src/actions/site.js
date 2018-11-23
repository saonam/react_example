import {requestPostJson, requestGetJson, requestPutJson} from './index.js';
import { jsonToQueryString } from '../utils/utils'

export const getSiteList = (params) =>{
	let url = '3rdcms/site' + jsonToQueryString(params);
	return dispatch =>{
		requestGetJson(url, function(response){
			dispatch({
				type: 'GET_LIST_SITE',
				data: response.data
			})
		})
	}
}

