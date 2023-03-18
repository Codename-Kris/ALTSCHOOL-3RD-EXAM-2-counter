const state = {
    count: 0,
  };
  
  const mutations = {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state, value) {
      state.count = value;
    },
  };
  
  const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    reset: ({ commit }) => commit('reset'),
    setValue: ({ commit }, value) => commit('setValue', value),
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };