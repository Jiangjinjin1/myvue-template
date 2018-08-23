/* eslint-disable */
export default {
	namespaced: true,
	state: {
		uiToast: {
			title: '',
			msg: ''
		},
		uiAlert: {
			title: '',
			msg: '',
			btns: []
		},
		uiLoading: {
			msg: '',
			loading: false,
			callback: ''
		}
	},
	getters: {},
	mutations: {
		setAlert (state, data) {
			console.log(JSON.stringify(data))

			state.uiAlert = data
		},
		hideAlert (state) {
			console.log('关闭alert')
			state.uiAlert.title = state.uiAlert.msg = ''
		},
		setToast (state, data) {
			console.log('setToast!')
			Object.assign(state.uiToast, data)
		},
		hideToast (state, data) {
			Object.assign(state.uiToast, data, {title: '', msg: ''})
		},
		setLoading (state, data) {
			console.log('loading!')
			Object.assign(state.uiLoading, data, {loading: true})
		},
		hideLoading (state, data) {
			console.log('关闭loading!')
			state.uiLoading.loading = false
		}
	},
	actions: {
		toastCallback ({commit}, data) {
			setTimeout(function () {
				commit('hideToast', data)
			}, data.timeout || 2000)
		},
		alertCallback ({commit}, data) {
			console.log(JSON.stringify(data))
			data.btns = data.btns || []
			// 定制化关闭alert函数
			for (let item of data.btns) {
				let _callback = function (data) {
					if (item.default) {
						item.callback && item.callback({
							callback: function () {
								// 默认情况下需要等待业务代码处理完成方可关闭alert
								commit('hideAlert')
							},
							...data
						})
					} else {
						// 合理的逻辑应该是先处理业务回调。在关闭alert.
						// 但倒换过来可以实现alert连续调用。
						commit('hideAlert')
						item.callback && item.callback(data)
					}
				}
				item._callback = _callback
			}
			// 共用关闭alert函数。
			commit('setAlert', data)
		}
	}
}
/* eslint-enable */
