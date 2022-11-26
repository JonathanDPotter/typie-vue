import Iuser from "interfaces/Iuser";
import { createStore } from "vuex";

interface Istate {
  user: Iuser | null;
  token: string | null;
}

export default createStore({
  state: { user: null, token: null } as Istate,
  getters: {
    getUser(state) {
      return state.user;
    },

    getToken(state) {
      return state.token;
    },
  },
  mutations: {
    setUser(state, user: Iuser) {
      state.user = user;
    },

    setToken(state, token: string) {
      state.token = token;
    },
  },
  actions: {
    logOut() {
      this.commit("setUser", null);
      this.commit("setToken", null);
    },
  },
  modules: {},
});
