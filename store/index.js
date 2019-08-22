import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	user_address:{
		province:'',
		city:'',
		district:''				
	}
}

const mutations={
	commit_address(state,data){
		state.user_address=data;
	}
}
export default new Vuex.Store({
	state:state,
	mutations:mutations
})