import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    databases: [],
  },
  getters: {
  },
  mutations: {
    setDatabases(data, state) {
      state.databases = data;
    },
  },
  actions: {
    getDatabases(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/get-items')
          .then((response) => {
            if (typeof response.data === 'string' && response.data.indexOf('ParseError') !== -1) {
              console.log(response.data);
            } else if (response.data.error > 0) {
              reject(response.data.result.error);
            } else {
              context.commit('setDatabases', response);
              resolve(response.data.result ? response.data.result : response.data);
            }
          })
          .catch((response) => {
            reject(response.response.data.errorCode);
          });
      });
    },
  },
  modules: {
  },
});
