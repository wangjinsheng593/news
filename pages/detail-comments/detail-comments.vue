<template>
	<view>
		<view class="comments-content" v-for="item in commentsList" :key="item.comment_id">
			<comments-box :comments='item'></comments-box>
		</view>
		<uni-load-more v-if="commentsList===0 || commentsList.length>5"
		  iconType="snow" :status="loading"
		></uni-load-more>
		
	</view>
</template>

<script>
	import CommentsBox from "@/components/comments-box/comments-box.vue"
	export default {
		components:{
			CommentsBox
		},
		data() {
			return {
				commentsList:[],
				article_id:'',
				page:1,
				pageSize:5,
				loading:"loading"
			}
		},
		onLoad(query) {
			this.article_id = query.id
			this.getComments()
		},
		
		onReachBottom() {
			if(this.loading = 'noMore') return
			this.page++
			this.getComments()
			
		},
		
		methods: {
			getComments(){
				this.$api.get_comments({
					article_id:this.article_id,
					page:this.page,
					pageSize:this.pageSize
					}).then((res)=>{
						const { data } = res
						if(data.length === 0){
							this.loading = 'noMore'
							return
						}
						//对象复制
						let oldFormData = JSON.parse(JSON.stringify(this.commentsList))
						oldFormData.push(...data)
						this.commentsList = oldFormData
				})
				
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.comments-content{
	padding: 0 15px;
}
</style>
