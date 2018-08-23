<template>
    <header id='head_top' :class="!goBack?'headClass':''">
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <icon name="back" class="iconSize" />
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
    </header>
</template>

<script>
import Icon from 'vue-svg-icon/Icon'
export default {
	components: {
		Icon
	},

	mounted () {
		// 获取用户信息 微信授权登录

	},
	props: {
		headTitle: {
			type: String,
			default: ''
		},
		goBack: {
			type: Boolean,
			default: false
		}
	},
	methods: {
	}

}
</script>

<style>
    @import '../../style/mixin.css';

    #head_top{
        background-color: $blue;
        @mixin wh 100%, 1.95rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .headClass{
      justify-content: center;
    }
    .iconSize{
        @mixin wh 1rem,1rem;
        fill: red;
    }
    .head_goback{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @mixin wh 0.6rem, 1rem;
      margin-left: .4rem;
    }
    .title_head{
        width: 80%;
        color: #fff;
        text-align: center;
        margin-left: .5rem;
        .title_text{
            @mixin sc 0.7rem, #fff;
            text-align: center;
            font-weight: 400;
        }
    }
</style>
