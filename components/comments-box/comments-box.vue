<template>
	<view class="comments-box">
		<view class="comment-header">
			<view class="comment-header_logo">
				<image src="../../static/my-active.png" mode="aspectFill"></image>
			</view>
			<view class="comment-header_info">
				<view class="title">名字</view>
				<view class="">2021-03-03 18:11</view>
			</view>
			
		</view>
		<view class="comment-content">
			<view class="">
				uniapp是一个很棒的开发框架
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
					
				}
			}
			
		}
		.comment-content{
			margin-top: 10px;
			font-size: 14px;
			color: #000;
			
		}
	}

</style>
