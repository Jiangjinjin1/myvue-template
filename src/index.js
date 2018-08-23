import 'babel-polyfill'
import Vue from 'vue'
import {
	Button,
	Message,
	Input,
	Dropdown,
	DropdownMenu,
	DropdownItem
} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
import _ from 'lodash'
import Icon from 'vue-svg-icon/Icon.vue'
import router from './router'
import './style/main.css'
import './config/rem'
import store from './store/index'
import App from './App'
import {ENV, DEV} from './config/env'
import {setCookie} from './config/setCookie'

Vue.use(infiniteScroll)

const UIComponents = [
	Button,
	Input,
	Dropdown,
	DropdownMenu,
	DropdownItem
]
for (let i = 0, len = UIComponents.length; i < len; i++) {
	Vue.component(UIComponents[i].name, UIComponents[i])
}
Vue.component('icon', Icon)

Vue.prototype.$message = Message
Vue.prototype._ = _

if (ENV === DEV) {
	setCookie()
}

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

const app = new Vue({
	router,
	store,
	...App
})

app.$mount('#app')
