import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: []
  },
  getters: {
    todos: (state) => state.todos
  },
  actions: {
    addTodo ({commit}, text) {
      let todo = {
        id: Date.now(),
        text
      }
      console.log(todo)
      commit('addTodo', todo)
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    }
  }
})
