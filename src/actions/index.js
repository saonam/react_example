import apiURL from '../../config/config.json'
import axios from 'axios';
import cookie from 'react-cookies';

export const baseURL = apiURL.url;
export const requestPostJson = (url, params, callback)=>{
	axios({
		method: 'POST',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
	        'Content-Type': 'application/json',
	        Authorization: localStorage.getItem('access_token')
	    },
	    validateStatus: function (status) {
	    	return true
		}
	}).then(function(response){
		if(response.status == 401){
			localStorage.removeItem('access_token')
			localStorage.removeItem('refresh_token')
			localStorage.removeItem('info')
			window.location.href = '/#/login'
		}else{
			callback(response)	
		}
	});
}

export const requestPostFormData = (url, params, callback)=>{
	axios({
		method: 'POST',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
			'Content-Type': 'multipart/form-data'
	    }
	}).then(function(response){
		callback(response)
	});
}
export const requestGetJson = (url, callback)=>{
	
	axios({
		method: 'GET',
		baseURL: baseURL,
		url: url,
		headers: {
			'Content-Type': 'application/json',
			'X-Branding-ID': '1e012518-cb66-11e8-b964-0242ac150004',
            'Accept-Language': 'vi',
            'Cms-Key': 'd01f7d6615de1b4415bbbfcd3f4fb021',
	    },
	    validateStatus: function (status) {
	    	return true;
		}
	}).then(function(response){
		callback(response)
	})
}
export const requestPutJson = (url, params, callback)=>{
	axios({
		method: 'PUT',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
	        'Content-Type': 'application/json'
	    },
	    validateStatus: function (status) {
	    	if(status == 500){
	    		return true
	    		// deleteToken()
	    	}else{
	    		return true
	    	}
		}

	}).then(function(response){
		callback(response)
	});
}
export const requestDeleteJson = (url, params, callback)=>{
	axios({
		method: 'DELETE',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
	        'Content-Type': 'application/json'
	    },
	    validateStatus: function (status) {
	    	if(status == 500){
	    		return true
	    	}else{
	    		return true
	    	}
		}
	}).then(function(response){
		callback(response)
	});
}

export const badRequest = ()=>{
	return{
		type: 'BAD_REQUEST'
	}
}
export const notFound = ()=>{
	return{
		type: 'NOT_FOUND'
	}
}