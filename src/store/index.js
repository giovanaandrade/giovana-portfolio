import { createStore } from "vuex";
import db from "@/db.json";

const state = {
  translate: false,
  language: db.portuguese,
};

const getters = {
  getterTranslate: (state) => state.translate,
  getterLanguage: (state) => state.language,
};

const actions = {
  toggleTranslate({ commit }) {
    commit("setTranslate", !this.state.translate);
    if (this.state.translate) {
      commit("setLanguage", db.english);
    } else {
      commit("setLanguage", db.portuguese);
    }
  },

  changeLanguage({ commit }) {
    if (this.getterTranslate) {
      commit("setLanguage", db.english);
    } else {
      commit("setLanguage", db.portuguese);
    }
  },
};

const mutations = {
  setTranslate: (state, translate) => (state.translate = translate),
  setLanguage: (state, language) => (state.language = language),
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
