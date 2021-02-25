<template>
	<view class="home">
		<navbar :isSearch='true' v-model="value" @input='change'></navbar>
		<view class="home-list">
			
			<view v-if="is_histroy" class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear" @click="clear">清空</text>
				</view>
			    <view v-if="historyLists.length>0" class="label-content">
					<view @click="openHisttory(item)" class="label-content_item" v-for="(item,index) in historyLists" :key='index'>
						{{item.name}}
					</view>
			    </view>
				<view v-else class="no-data">
					没有搜索历史
				</view>
			</view>
			
			<view v-else>
				<view v-if="searchList.length>0">
				    <uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
					<list-scroll class="list-scroll" >
						<list-card @click='setHistory' v-for="item in searchList" :item='item' :key='item._id' mode="base"></list-card>
					</list-scroll>
					
				</view>
				<view v-if="searchList.length===0 && !loading" class="no-data">
					没有搜索到相关数据
				</view>

			</view>
			
		</view>
	</view>
</template>

<script>
	import ListCard from "@/components/list-card/list-card.vue"
	import ListScroll from "@/components/list-scroll/list-scroll.vue"
	import { mapState } from 'vuex'
	import NavBar from "@/components/navbar/navbar.vue"
	export default {
		components:{
			NavBar,
			ListScroll,
			ListCard
		},
		data() {
			return {
				value:'',
				is_histroy:true,
				searchList:[],
				loading:false
			}
		},
		computed:{
			//实时监听数据的变化
			//mapState调用的是一个方法，方法里面传一个数组，数组的值就是vuex里面的state的值
			...mapState(['historyLists'])
		},
		methods: {
			
			setHistory(){
				this.$store.dispatch('set_history',{
					name:this.value
				})
			},
			openHisttory(item){
				this.value = item.name
				this.getSearch(this.value)
			},
			clear(){
				this.$store.dispatch('clear_history')
				uni.showToast({
					title:'清空完成'
				})
			},
			change(value){
				if(!value){
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
				//做个标记：mark不用在页面中渲染，所以不需要在data中声明
				if(!this.mark){
					this.mark = true
					this.timer = setTimeout(()=>{
						this.mark = false
						this.getSearch(value)
					},1000)
				}
			},
			getSearch(value){
				//value为空的情况下
				if(!value){
					this.is_histroy = true
					this.searchList = []
					return
				}
				this.is_histroy = false
				this.loading = true
				this.$api.get_search({
					value:value,
					}).then(res=>{
						this.loading = false
						let { data } = res
						this.searchList = data
				}).catch(()=>{
					this.loading = false
				})
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
		display: flex;
		background-color: #f5f5f5;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		.label-box{
			background-color: #FFFFFF;
			margin-bottom: 10px;
			.label-header{
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border-bottom: 1px #f5f5f5 solid;
				.label-title{
					color: $mk-base-color;
				}
				.label-clear{
					color: #30b33a;
					font-weight: bold;
				}
			}
			.label-content{
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0px;
				.label-content_item{
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border:1px #666 solid;
					font-size: 14px;
					color: #666;
				}
				
			}
			
		}
	}
	.no-data{
		height: 200px;
		line-height: 200px;
		width: 100%;
		text-align: center;
		color: #666;
		font-size: 12px;
	}

</style>
