const mutations = {
  INCREMENT (state, payload) {
    const newState = state.count += payload.amount
    return newState
  }
}

export default mutations
