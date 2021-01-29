<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		
		<tab :list='tabList' @tab="tab" :tabIndex='tabIndex'></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex='activeIndex' @change='change'></list>
		</view>
		

	</view>
</template>

<script>
	//easyCom 组件是components/组件/组件.vue则不需要引入,只是局部引入,也不需要注册
	import List from "@/components/list/list.vue"
	import NavBar from "@/components/navbar/navbar.vue"
	import Tab from "@/components/tab/tab.vue"
	export default {
		components:{
			NavBar,
			Tab,
			List
		},
		data() {
			return {
				title: 'Hello',
				tabList:[],
				tabIndex:0,
				activeIndex:0,
			}
		},
		onLoad() {
			this.getlabel()
		},
		methods: {
			change(current){
				this.tabIndex = current
				this.activeIndex = current
			},
			
			tab({data,index}){
				this.activeIndex = index
			},
			getlabel(){
				this.$api.get_label({
					name:"get_lable"
				}).then(res=>{
					let { data } = res
					data.unshift({name:'全部'})
					this.tabList = data
				})
		
			}

		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
        flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list{
			flex: 1;//内容铺满
			box-sizing: border-box;
			
		}
		
	}

</style>
