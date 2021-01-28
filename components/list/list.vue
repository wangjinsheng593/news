<template>
	<swiper class="home-swiper" :current="activeIndex" @change='change'>
	     <swiper-item v-for="(item,index) in tab" :key='index' class="swiper-item">
	     	<list-item :list="listCatchData[index]"></list-item>
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
				listCatchData:{}
				
			};
		},
		watch:{
			tab(newVal){
				if(newVal == 0) return
				this.getList(this.activeIndex)
			}
		},
		
		//onLoad 在页面使用， created 在组件使用
		created(){
			//TODO tab还没有赋值
			//this.getList(0)
		},
		
		methods:{
			change(e){
				const { current } = e.detail
				this.getList(current);
				this.$emit('change',current)
				
			},
			
			getList(current){
				this.$api.get_list({name:this.tab[current].name}).then(res=>{
					if(res.code == 200){
						//类似懒加载，需要的时候才会加载对应的信息
						this.$set(this.listCatchData,current,res.data)
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
