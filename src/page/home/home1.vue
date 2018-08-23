<template>
  <main>
    <el-button class="button_come" type="primary" @click.native="hello">进入店铺</el-button>
  </main>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	components: {
	}
})
export default class HomePage extends Vue {
	hello () {
		this.$message('欢迎进入二哈的小店')
	}
}
</script>

<style>
  .button_come{
    display: block;
    margin: 2rem auto;
  }
</style>
