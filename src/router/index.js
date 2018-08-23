import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import {routerMode} from '../config/env'

Vue.use(Router)

export default new Router({
	mode: routerMode,
	routes,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) { // 记录滚动条位置
		if (savedPosition) {
			return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop
			}
			return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})
