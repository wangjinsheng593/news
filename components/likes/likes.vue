<template>
	<view class="icons" @click.stop="likeTap">
		<uni-icons size="20" color="#f07373" type="heart"></uni-icons>
	</view>
		
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			likeTap(){
				
			}
		}
	}
</script>

<style>
	.icons{
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}

</style>
