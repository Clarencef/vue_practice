import { getters } from './getters'
import { state } from './state'
export default {
  state,
  getters,
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    }
  },
  strict: true
}
