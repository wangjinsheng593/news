<script>
	export default {
		//全局只会出发一次，而且是在应用启动的时候
		onLaunch: function() {
			this.$api.get_user({
				user_id:"5f38d3d2ad57420001d79155",
			}).then(res=>{
				const { data } =res
				this.$store.dispatch('set_userInfo',data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "components/gaoyia-parse/parse.css";
	
</style>
