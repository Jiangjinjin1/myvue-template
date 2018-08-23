<template>
    <div class="ui-toast up-vertical">
        <p class="title" v-show="propItem.title">{{propItem.title}}</p>
        <p :class="propItem.title?'':'msg'">{{propItem.msg}}</p>
    </div>
</template>
<style>
    @import '../../style/mixin.css';

    $ui-toast-bgColor: rgba(102, 102, 102, 0.8);
    .ui-toast {
        background-color: $ui-toast-bgColor;
        line-height: 1rem;
        padding: 0.5rem 0.25rem;
        border-radius: 0.45rem;
        width: 11rem;
        text-align: center;
        color: #fff;
        transition: opacity .3s, transform .3s, right .3s, top .4s;
        -webkit-animation: fadeOut 1s 0s ease both;
        animation: fadeOut 1s 0s ease both;
        p:nth-child(1) {
            font-size: .8rem;
            height: 1rem;
            overflow: hidden;
            line-height: 1rem;
        }
        p:nth-child(2){
            font-size: .7rem;
        }
        .msg {
            line-height: .8rem;
        }
    }
</style>
<script type="text/babel">
export default{
	data () {
		return {
			msg: 'vue 1104'
		}
	},
	props: {
		propItem: {
			type: Object,
			required: true
		}
	},
	computed: {
		toastTitle () {

		}
	},
	methods: {
		created () {
			// console.log('created')
		},
		mounted () {
			// console.log('mounted')
		},
		beforeUpdate () {
			// console.log('beforeUpdate')
		},
		updated () {
			// console.log('updated')
		}
	},
	components: {}
}
</script>
