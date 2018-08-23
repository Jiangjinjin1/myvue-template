<template>
    <div class="ui-alert up-vertical">
        <div class="content">
            <p class="title"
               v-show="propItem.title"
               v-text="propItem.title"
               :class="propItem.msg?'':'noMsg'"
            />
            <p v-show="propItem.msg">{{propItem.msg}}</p>
        </div>
        <div class="btns">
            <span
                    v-for="(item,index) in propItem.btns"
                    v-text="item.msg"
                    :class="(cptBtns.count-1)?'more':''"
                    :style="{width:100/cptBtns.count+'%'}"
                    @click="btnTap(item,index)"
            />
        </div>
    </div>
</template>
<style>

    .ui-alert {
        border-radius: 0.45rem;
        width: 12rem;
        text-align: center;
        background-color: #fff;
        color: #333;
        font-size: 0.7rem;
        .content {
            padding: 0.25rem;
            line-height: 1rem;
            .title {
                font-size: 0.8rem;
                line-height: 1.5rem;
                font-weight: bold;
            }
            .noMsg {
                line-height: 2.5rem;
            }
        }
        .btns {
            line-height: 2.2rem;
            border-top: 1px solid #9B9B9B;
            color: #4a90e2;
            overflow: hidden;
            .more {
                display: inline-block;
                float: left;
                box-sizing: border-box;
                border-left: 1px solid #9B9B9B;
                &:first-child{
                    border: none;
                }
            }
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
		cptMsg () {
			return this.msg.split(' ')
		},
		cptBtns () {
			if (this.propItem.btns) {
				return {
					btns: this.propItem.btns,
					count: this.propItem.btns.length
				}
			} else {
				return {
					btns: [{
						msg: '确定'
					}],
					count: 1
				}
			}
		}
	},
	methods: {
		btnTap (btnItem, index) {
			// this.propItem._callback(btnItem.msg);
			btnItem._callback && btnItem._callback({value: btnItem.msg, index: index})
		}
	},
	components: {}
}
</script>
