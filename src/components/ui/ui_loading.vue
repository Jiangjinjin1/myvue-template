<template>
  <section>
    <loading/>
    <section class="animation_opactiy shop_back_svg_container">
      <img src="../../images/shop_back_svg.svg">
    </section>
  </section>
</template>

<script>
import Loading from '../../components/common/loading'

export default{
	data () {
		return {}
	},
	props: {
		propItem: {
			type: Object,
			default: function () {
				return {
					loading: false
				}
			}
		}
	},
	components: {
		Loading
	}
}
</script>

<style>
  @import "../../style/mixin.css";

  .shop_back_svg_container{
    position: fixed;
    @mixin wh 100%, 100%;
    img{
      @mixin wh 100%, 100%;
    }
  }
</style>
