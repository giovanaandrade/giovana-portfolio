import { createStore } from "vuex";
import db from "@/db.json";

const state = {
  language: db.portuguese,
};

const getters = {
  getterLanguage: (state) => state.language,
};

const actions = {
  translateToEnglish({ commit }) {
    commit("setLanguage", db.english);
  },

  translateToPortuguese({ commit }) {
    commit("setLanguage", db.portuguese);
  },
};

const mutations = {
  setLanguage: (state, language) => (state.language = language),
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
