import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notesList: [

        ],
        activeNotes: null
    },
    mutations: {
        addNotes(state, data) {
            state.notesList.push(data)
            state.activeNotes = state.notesList.length - 1
        },
        updateNotesTitle(state, data) {
            state.notesList[state.activeNotes].title = data
        },
        updateNotesText(state, data) {
            state.notesList[state.activeNotes].message = data
        },
        deleteNotes(state) {
            state.notesList.splice(state.activeNotes, 1)
            if (state.notesList.length) {
                state.activeNotes = 0
            } else {
                state.activeNotes = null
            }
        },
        favoriteNotes(state) {
            state.notesList[state.activeNotes].favorite = !state.notesList[state.activeNotes].favorite;
        },
        toggleActive(state, id) {
            state.activeNotes = id
        }
    },
    actions: {
        addN({ commit }, data) {
            commit('addNotes', data)
        },
        updateNTitle({ commit }, data) {
            commit('updateNotesTitle', data)

        },
        updateNText({ commit }, data) {
            commit('updateNotesText', data)

        },
        deleteN({ commit }) {
            commit('deleteNotes')
        },
        favoriteN({ commit }) {
            commit('favoriteNotes')
        },
        togA({ commit }, id) {
            commit('toggleActive', id)
        }
    },
    getters: {
        favoriteList: state => state.notesList.filter(v => v.favorite),
        allList: state => state.notesList,
        activeIndex: state => state.activeNotes,
        activeNotesFavor: state => {
            if (state.activeNotes === null) {
                return null;
            } else {
                return state.notesList[state.activeNotes].favorite
            }
        },
        activeNotes: state => {
            if (state.activeNotes === null) {
                return null;
            } else {
                return state.notesList[state.activeNotes]
            }
        }
    }
})