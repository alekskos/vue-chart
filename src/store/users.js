const state = {
  all: {},
  currentUser: 'mr_a'
}
const mutations = {
  SET_USER (state, { user }) {
    state.all = {...state.all, [user.id]: user.data() }
  }
}
const actions = {
  seed ({ rootState }) {
    let userRef = rootState.db.collection('users')
    userRef.doc('mr_a').set({
      firstName: 'Sasha',
      lastName: 'Kost'
    })
    userRef.doc('mr_b').set({
      firstName: 'Vanya',
      lastName: 'Kost'
    })
    userRef.doc('mr_c').set({
      firstName: 'Aglaya',
      lastName: 'Kost'
    })
  },
  async get ({ commit, rootState }) {
    let userRef = rootState.db.collection('users')
    let users = await userRef.get()
    users.forEach(user => commit('SET_USER', { user }))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
