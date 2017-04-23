const actions = {
  addNote ({ dispatch }) {
    dispatch('ADD_NOTE')
  },
  editNote ({ dispatch }, e) {
    dispatch('EDIT_NOTE', e.target.value)
  },
  deleteNote ({ dispatch }) {
    dispatch('DELETE_NOTE')
  },
  updateActiveNote ({ dispatch }, note) {
    dispatch('SET_ACTIVE_NOTE', note)
  },
  toggleFavorite ({ dispatch }) {
    dispatch('TOGGLE_FAVORITE')
  }
}
