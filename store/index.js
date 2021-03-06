//store/index.js
const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (req.user) {
      commit("user/setUser", req.user);
    }
  }
};

export { actions };
