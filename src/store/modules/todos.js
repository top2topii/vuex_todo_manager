import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    // console.log(response.data);
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    console.log("=====addTodo");
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title,
      completed: false });
    
    commit('newTodo', response.data);
    console.log(response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo)
  // newTodo: function (state, todo) {
  //   state.todos.unshift(todo);
  //   console.log("=====NetTodo");

  //   console.log(state.todos);
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};