import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import ui from './modules/ui'

Vue.use(Vuex)

const state = {
	userInfo: null
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	plugins: [createPersistedState({
		// 配置白名单
		paths: [
			'userInfo'
		]
	})],
	modules: {
		ui
	}
})
