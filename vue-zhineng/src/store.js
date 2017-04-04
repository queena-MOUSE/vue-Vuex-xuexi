import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
    count:10
};
const mutations={
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    },
    odd(state){
        state.count++
    }
};

const actions={
    increment:({
        commit
    })=>{
        commit('increment')
    },
    decrement:({
        commit
    })=>{
        commit('decrement')
    },
    odd:({
        commit,state
    })=>{
        if (state.count%2==0) {
            commit('odd')
        }

    }

};
const getters={
    count(state){
        return state.count;
    }
}



export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
