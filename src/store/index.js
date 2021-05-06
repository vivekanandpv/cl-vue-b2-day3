import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    person: {
      firstName: 'Arun',
      lastName: 'Kumar',
    },
  },
  mutations: {
    updateFirstName(state, newFirstName) {
      state.person.firstName = newFirstName;
    },
    updateLastName(state, newLastName) {
      state.person.lastName = newLastName;
    },
  },
  actions: {
    changeFirstNameAsync(context, newFirstName) {
      //  validate, etc...
      if (newFirstName.trim().length > 0) {
        setTimeout(() => {
          context.commit('updateFirstName', newFirstName);
        }, 1000);
      } else {
        alert('Cannot take empty or whitespace');
      }
    },
  },
});
