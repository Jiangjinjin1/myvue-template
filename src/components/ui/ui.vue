<template>
    <div class="v-ui" v-show="uiShow">
        <UILoading
            v-show="loadingShow"
            :propItem="uiLoading"
        />
        <UIToast
            v-show="toastShow"
            :propItem="uiToast"
        />
        <UIAlert
            v-show="alertShow"
            :propItem="uiAlert"
        />
    </div>
</template>
<style>
    .v-ui {
        position: fixed;
        z-index: 1104;
        background-color: rgba(0, 0, 0, .2);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
<script type="text/babel">
import {mapState} from 'vuex'
import UILoading from './ui_loading.vue'
import UIToast from './ui_toast.vue'
import UIAlert from './ui_alert.vue'
export default{
	data () {
		return {
			msg: 'vue 1104'

		}
	},
	props: {},
	computed: {
		uiShow () {
			return this.alertShow || this.loadingShow || this.toastShow
		},
		alertShow () {
			return !!(this.uiAlert.title || this.uiAlert.msg)
		},
		loadingShow () {
			return this.uiLoading.loading || false
		},
		toastShow () {
			return !!(this.uiToast.title || this.uiToast.msg)
		},
		...mapState('ui', ['uiToast', 'uiAlert', 'uiLoading'])
	},
	methods: {},
	components: {
		UIToast,
		UILoading,
		UIAlert
	}
}
</script>
