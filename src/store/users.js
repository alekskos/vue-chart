const state = {
  all: {},
  currentUser: 'mr_a'
}
const mutations = {}
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
