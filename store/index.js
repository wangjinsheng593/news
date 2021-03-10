//vuex  状态管理

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//数据源
	state:{
		userInfo:uni.getStorageSync('USERINFO') || {},
		//持久化缓存，vuex刷新就会清空数据，所以需要缓存本地
		historyLists:uni.getStorageSync('_histtory') || []
	},
	mutations:{
		SET_USER_INFO(state,userInfo){
			state.userInfo = userInfo 
		},
		SET_HISTORY_LISTS(state,history){
			state.historyLists = history 
		},
		CLEAR_HISTORY(state){
			state.historyLists = [] 
		}
	},
	actions:{
		set_userInfo({commit},userInfo){
			uni.setStorageSync('USERINFO',userInfo)
			commit('SET_USER_INFO',userInfo)
		},
		//history是组件传递进来的数据
		set_history({commit,state},history){
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync('_histtory',list)
			//commit可以调用mutations的方法
			commit('SET_HISTORY_LISTS',list)
		},
		clear_history({commit,state}){
			uni.removeStorageSync('_histtory')
			commit('CLEAR_HISTORY')
		}
		
	}
	
})
export default store
