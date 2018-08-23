<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress({path: '/home/moreShop'})" class="guide_item">
            <icon :name="$route.path.indexOf('/moreShop')>-1?'shop':'shopGray'" class="icon_style" />
            <span>外卖</span>
        </section>
        <section @click = "gotoAddress('/home/profile')" class="guide_item">
            <icon :name="$route.path.indexOf('/profile')>-1?'myShop':'myShopGray'" class="icon_style" />
            <span>我的</span>
        </section>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import Icon from 'vue-svg-icon/Icon'
export default {
	data () {
		return {

		}
	},
	created () {

	},
	mounted () {

	},
	components: {
		Icon
	},
	computed: {
		...mapState([
			'userInfo'
		])
	},
	methods: {
		gotoAddress (path) {
			this.$router.push(path)
		}
	}

}
</script>

<style>
    @import '../../style/mixin.css';

    #foot_guide{
        background-color: #fff;
        position: absolute;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @mixin wh 100%, 2.25rem;
        display: flex;
        flex-direction: row;
        box-shadow: 0 -0.03rem 0.06rem rgba(0,0,0,.1);
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
        padding-top: .2rem;
		.icon_style{
			@mixin wh 1rem, 1rem;
			margin-top: .1rem;
			fill: #ccc;
		}
		span{
			@mixin sc .6rem, #666;
		}
    }
   
</style>
