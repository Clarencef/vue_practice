const mutations = {
  INCREMENT (state, payload) {
    const newState = state.count += payload.amount
    return newState
  },
  ADD_NOTE (state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    }
    state.notes.concat([newNote])
    state.activeNote = newNote
  },
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },
  DELETE_NOTE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1)
    state.activeNote = state.notes[0]
  },
  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default mutations
