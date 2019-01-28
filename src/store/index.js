import Vue from 'vue'
import Vuex from 'vuex'
import messages from '@/assets/messages'
import {
    CHANGE_CLIENT_NAME,
    SET_FINAL_MESSAGE,
    CLEAR_FINAL_MESSAGE,
    MODIFY_FINAL_MESSAGE,
    CHANGE_LANGUAGE,
    TOGGLE_FAVORITE_STATUS,
    TOGGLE_MESSAGE_HOVER_STATUS
} from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        client: {
            name: ''
        },
        currentLanguage: 'eng',
        finalMessage: '',
        messages
    },
    getters: {
        getMessageById: state => id => state.messages.find(message => message.id === id)
    },
    mutations: {
        [CHANGE_CLIENT_NAME] (state, payload) {
            state.client.name = payload.name
        },
        [SET_FINAL_MESSAGE] (state, payload) {
            state.finalMessage = payload.message
        },
        [CLEAR_FINAL_MESSAGE] (state) {
            state.finalMessage = ''
        },
        [MODIFY_FINAL_MESSAGE] (state, message) {
            state.finalMessage += `\n${message.body}\n`
        },
        [TOGGLE_MESSAGE_HOVER_STATUS] (state, message) {
            message.hover = !message.hover
        },
        [CHANGE_LANGUAGE] (state, language) {
            state.currentLanguage = language
        },
        [TOGGLE_FAVORITE_STATUS] (state, payload) {
            switch (payload.action) {
                case 'add':
                    payload.message.favorite = true
                    break
                case 'remove':
                    payload.message.favorite = false
                    break
            }
        }
    },
    actions: {
        addMessageToBody ({ commit, getters }, id) {
            let message = getters.getMessageById(id)
            commit(MODIFY_FINAL_MESSAGE, message)
        },
        showBody ({ commit, getters }, id) {
            let message = getters.getMessageById(id)
            commit(TOGGLE_MESSAGE_HOVER_STATUS, message)
        }
    }
})
