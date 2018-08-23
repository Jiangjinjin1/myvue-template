import queryString from 'query-string'
import ui from '../modules/ui/ui'
import {
	hostURL,
	ENV,
	DEV
} from './env'
import {timeout} from './promise'

export default async (options = {}) => {
	const {
		url = '',
		data = {},
		type = 'POST',
		method = 'fetch',
		env = ENV,
		requestTimeout = 10 * 1000
	} = options
	const requestType = type.toUpperCase()
	let requestUrl = hostURL(env, url)

	if (requestType === 'GET') {
		let dataStr = '' // 数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&'
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
			requestUrl = requestUrl + '?' + dataStr
		}
	}

	if (window.fetch && method === 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: requestType,
			headers: {
				// 'Accept': 'application/json',
				// 'Content-Type': 'application/json'
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf8'
			},
			mode: 'cors',
			cache: 'no-cache'
		}

		if (requestType === 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: queryString.stringify(data)
			})
		}

		try {
			const response = await timeout(requestTimeout)(
				fetch(requestUrl, requestConfig)
			).catch((e) => {
				let msg = '亲，您的网络连接失败，请重新尝试。'
				if (ENV === DEV) {
					msg = `${msg}/${e.message}`
				}
				ui.hideLoading()
				ui.toast({title: '', msg: msg})
				throw new Error(msg)
			})
			const responseJson = await response.json()
			if (responseJson.code !== 0) {
				ui.toast({title: '', msg: responseJson.msg})
			}
			return responseJson
		} catch (error) {
			ui.hideLoading()
			ui.toast({title: '', msg: error.message})
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest()
			} else {
				/* eslint-disable */
        requestObj = new ActiveXObject()
        /* eslint-enable */
			}

			let sendData = ''
			if (requestType === 'POST') {
				sendData = queryString.stringify(data)
			}

			requestObj.open(requestType, requestUrl, true)
			requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
			requestObj.send(sendData)

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState === 4) {
					let obj = requestObj.response
					if (requestObj.status === 200) {
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj)
						}
						if (obj.code !== 0) {
							ui.toast({title: '', msg: obj.msg})
						}
						resolve(obj)
					} else {
						ui.toast({title: '', msg: '请求失败，请稍后重试'})
						ui.hideLoading()
						reject(new Error('请求失败，请稍后重试'))
					}
				}
			}
		})
	}
}
