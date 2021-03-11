<template>
	<list-scroll class="list-scroll" @loadmore='loadmore'>
		<view >
			<list-card v-for="item in list" :item='item' :key='item._id' mode="base"></list-card>
		</view>
	    <uni-load-more v-if="list.length===0 || list.length>9" iconType="snow" :status="load.loading || 'loading'"></uni-load-more>
	</list-scroll>
</template>

<script>
	import ListCard from "@/components/list-card/list-card.vue"
	import ListScroll from "@/components/list-scroll/list-scroll.vue"
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return[]
				}
			},
			load:{
				type:Object,
				default(){
					return{
						loading:'loading'
					}
				}
				
			}
			
		},
		components:{
			ListScroll,
			ListCard
		},
		data() {
			return {
	
			}
		},
		methods:{
			loadmore(){
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
