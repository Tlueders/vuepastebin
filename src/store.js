/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paste: "",
    language: "js",
    pastes: []
  },
  mutations: {
    changeLanguage(state, language) {
      state.language = language
    },
    onPasteboxChange(state, paste) {
      state.paste = paste
    },
    addPastes(state, pastes) {
      state.pastes.push(pastes)
    }
  },
  getters: {
    paste: state => state.paste,
    language: state => state.language,
    pastes: state => state.pastes
  },
  actions: {
      addPaste: function ({commit}, payload) {
        axios.post('https://vue-pastebin-api.herokuapp.com/api/paste', payload)
          .then((response) => {
            console.log(response.data);
            router.push(`/pastes/${response.data.data.page_id}`)
          })
      },
      getPastes: function(context, page_id) {
        axios.get(`https://vue-pastebin-api.herokuapp.com/api/pastes/${page_id}`)
          .then((response) => {
            console.log(response.data)
            context.commit('addPastes', response.data)
          })
      }
  }
})
