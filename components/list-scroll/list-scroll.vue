<template>
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y="true" @scrolltolower='loadmore'>
			<!-- scroll-view最好使用一个父容器包裹着要滚动的内容,避免出现滚动不了的情况 -->
			<view>
				<slot></slot>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			loadmore(){
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.scroll{
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.list-scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}	

</style>
