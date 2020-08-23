import { MutationTree } from 'vuex'
import { MutationTypes } from './mutationTypes'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.UPDATE_COUNT_1](state: S, payload: number): void
  [MutationTypes.UPDATE_COUNT_2](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.UPDATE_COUNT_1](state, count) {
    state.count1 = count
  },
  [MutationTypes.UPDATE_COUNT_2](state, count) {
    state.count2 = count
  },
}
