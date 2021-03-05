<template>
	<view class="comments-box">
		<view class="comment-header">
			<view class="comment-header_logo">
				<image :src="comments.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="comment-header_info">
				<view v-if="!comments.is_reply" class="title">{{comments.author.author_name}}</view>	
				<view v-else class="title">
				    {{comments.author.author_name}}
				    <text class="reply-text">回复</text>
					{{comments.to}}
				</view>
				<view class="">{{comments.create_time}}</view>
			</view>
			
		</view>
		<view class="comment-content">
			<view>{{comments.comment_content}}</view>
			<view class="comments-info">
				<view class="comment-button" @click="commentsReply({comments,is_reply:reply})">回复</view>
			</view>
			<!-- 无限调用解决方法：判断子回复数组是否为空 -->
			<view class="comments-reply" v-for="item in comments.replys" :key='item.comments_id'>
				<!-- 递归组件：在自己组件内调用自己，会出现的一个问题：无限调用 -->
				<comments-box :reply='true' :comments='item' @reply='commentsReply'></comments-box>
			</view>
		</view>
		
	</view>
</template>

<script>
	// 递归组件：在自己组件内调用自己，会出现的一个问题：无限调用
		import commentsBox from '@/components/comments-box/comments-box.vue'
	export default {
		name: "comments-box",
		components: {
			commentsBox
		},
		props:{
			comments:{
				type:Object,
				default(){
					return{}
				}
			},
			reply:{
				type:Boolean,
				default:false
			}
		},

		data() {
			return {
				
			};
		},
		methods:{
			commentsReply(comment){
				//为了区分是主回复还是子回复
				if(comment.is_reply){
					comment.comments.reply_id = comment.comments.comment_id
					//这个comment_id是 comments.replys数组里面的id，不是主回复的id
			        comment.comments.comment_id = this.comments.comment_id
				}
				this.$emit('reply',comment)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comments-box{
		margin: 15px 0;
		.comment-header{
			display: flex;
			.comment-header_logo{
				flex-shrink: 0;
				width: 30px;
				height: 30px;
				border-radius: 5px;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.comment-header_info{
				display: flex;
				flex-direction: column;
				padding-left: 15px;
				font-size: 12px;
				color: #999;
				line-height: 1;
				.title{
					margin-bottom: 10px;
					font-size: 14px;
					color: #333;
					.reply-text{
						margin: 0 10px;
						font-weight: bold;
						color: #000;
					}
					
				}
			}
			
		}
		.comment-content{
			margin-top: 10px;
			font-size: 14px;
			color: #000;
			.comments-info{
				margin-top: 15px;
				display: flex;
				.comment-button{
					padding: 2px 10px;
					font-size: 12px;
					color: #999;
					border-radius: 20px;
					border: 1px #ccc solid;
				}
			}
			.comments-reply{
				display: flex;
				margin: 15px 0;
				padding: 0 10px;
				border: 1px #eee solid;
				
			}
			
		}
	}

</style>
