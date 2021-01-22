<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list='tabList'@tab="tab"></tab>
		
		<list-scroll>
			<list-card v-for="item in 5" :key="item"></list-card>
		</list-scroll>
	</view>
</template>

<script>
	//easyCom 组件是components/组件/组件.vue则不需要引入,只是局部引入,也不需要注册
	import ListCard from "@/components/list-card/list-card.vue"
	import ListScroll from "@/components/list-scroll/list-scroll.vue"
	import NavBar from "@/components/navbar/navbar.vue"
	import Tab from "@/components/tab/tab.vue"
	export default {
		components:{
			NavBar,
			Tab,
			ListScroll,
			ListCard
		},
		data() {
			return {
				title: 'Hello',
				tabList:[]
			}
		},
		onLoad() {
			this.getlabel()
		},
		methods: {
			tab({data,index}){
				console.log(data,index)
			},
			getlabel(){
				this.$api.get_label({
					name:"get_lable"
				}).then(res=>{
					this.tabList = res.data
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
		border: 1px red solid;
		overflow: hidden;
		
	}

</style>
