<template>
	<list-scroll class="list-scroll">
		<list-card v-for="item in list" :item='item' :key='item._id' mode="base"></list-card>
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
			
		},
		components:{
			ListScroll,
			ListCard
		},
		data() {
			return {
	
			}
		},
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
