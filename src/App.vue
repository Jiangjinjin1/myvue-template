<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <UI/>
  </div>
</template>
<script>
import UI from './components/ui/ui'

export default {
	created () {
	},

	mounted () {

	},

	methods: {

	},
	components: {
		UI
	}
}
</script>

<style>
  @import "./style/mixin.css";

  #app{
  @mixin wh 100%,100%;
    overflow-x: hidden;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-to {
    opacity: 0;
  }
</style>