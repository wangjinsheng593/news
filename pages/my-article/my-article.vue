<template>
	<view>
		<uni-load-more v-if="list.length===0 && !articleShow" status="loading"></uni-load-more>
		<list-card v-for="(item,index) in list" :key='item.id+index' :item="item"></list-card>
		<view class="no-data" v-if="articleShow">暂无发表文章</view>
	</view>
</template>

<script>
	import ListCard from "@/components/list-card/list-card.vue"
	export default {
		components:{
			ListCard
		},
		data() {
			return {
				list:[],
				articleShow: false,
			}
		},
		onLoad() {
			this.getMyArticle()
		},
		methods: {
			getMyArticle(){
				this.$api.get_my_article().then(res=>{
					const { data } = res
					this.list = data
					this.articleShow = this.list.length === 0 ? true : false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.no-data {
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}

</style>
