
import store from '../../store/index.js'
/* eslint-disable */
export default {
	loading (params) {
		console.log(JSON.stringify(params))
		store.commit('ui/setLoading', params || {})
	},
	hideLoading (params) {
		console.log(JSON.stringify(params))
		store.commit('ui/hideLoading', params || {})
	},
	alert (params) {
		console.log(JSON.stringify(params))
		// 预处理
		if (typeof params === 'string') {
			params = {
				title: params
			}
		}
		if (!(params.title && params.msg)) {
			params.title = params.title || params.msg
			params.msg = ''
		}
		if (!Array.isArray(params.btns)) {
			params.btns = [{
				msg: params.btns || '确定'
			}]
		}
		store.dispatch('ui/alertCallback', params)
	},
	hideToast (params) {
		console.log(JSON.stringify(params))
		store.dispatch('ui/toastCallback', params || {})
	},
	toast (params) {
		console.log(JSON.stringify(params))
		store.commit('ui/setToast', params)
		this.hideToast({timeout: params.timeout})
	}
}
/* eslint-enable */
