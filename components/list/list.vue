<template>
	<swiper class="home-swiper" :current="activeIndex" @change='change'>
	     <swiper-item v-for="(item,index) in tab" :key='index' class="swiper-item">
	     	<list-item @loadmore='loadmore' :load='load[index]' :list="listCatchData[index]"></list-item>
	     </swiper-item>
	</swiper>
</template>

<script>
    import listItem from "./list-item.vue"
	export default {
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0,
			}
		},
		components:{
			listItem,
		},
	
		data() {
			return {
				list:[],
				listCatchData:{},
				load:{},
				pageSize:10
				
			};
		},
		watch:{
			tab(newVal){
				if(newVal == 0) return
				this.listCatchData = {}
				this.load = {}
				this.getList(this.activeIndex)
			}
		},
		
		//onLoad 在页面使用， created 在组件使用
		created(){
			//TODO tab还没有赋值
			//this.getList(0)
		},
		
		methods:{
			loadmore(){
				if(this.load[this.activeIndex].loading === 'noMore')return
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
			
			change(e){
				const { current } = e.detail
				this.$emit('change',current)
				//当数据不存在，或者程度为0的情况下才去请求数据
				if(!this.listCatchData[current] || this.listCatchData[current].length===0){
					this.getList(current);
				}
			},
			
			getList(current){
				if(!this.load[current]){
					this.load[current] ={
						page:1,
						loading:'loading'
					}
				}
				this.$api.get_list({
					name:this.tab[current].name,
					page:this.load[current].page,
					pageSize:this.pageSize
					}).then(res=>{
					if(res.code == 200){
						let { data } = res
						if(data.length == 0){
							let oldLoad = {}
							oldLoad.loading = 'noMore'
							oldLoad.page = this.load[current].page
							this.$set(this.load,current,oldLoad)
							//强制渲染页面
							this.$forceUpdate()
							return
						}
						let oldList = this.listCatchData[current] || []
						oldList.push(...data)
						//类似懒加载，需要的时候才会加载对应的信息
						this.$set(this.listCatchData,current,oldList)
					}
				})
			}
		},
		
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;

		}
	}

</style>
