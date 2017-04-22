export const increment = (state, payload) => {
  const newState = state.count += payload.amount
  return newState
}
