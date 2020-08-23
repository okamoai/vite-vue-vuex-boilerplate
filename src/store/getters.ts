import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  timesCount(state: State): number
  divisionCount(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  timesCount(state) {
    return state.count1 * state.count2
  },
  divisionCount(state) {
    return state.count1 / state.count2
  },
}
