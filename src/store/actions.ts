import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { MutationTypes } from './mutationTypes'
import { Mutations } from './mutations'
import { ActionTypes } from './actionTypes'
import { Getters } from './getters'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & Omit<ActionContext<State, State>, 'commit' | 'getters'>

export type Actions = {
  [ActionTypes.ADD_COUNT_1]({ commit }: AugmentedActionContext, payload: number): void
  [ActionTypes.MINUS_COUNT_1]({ commit }: AugmentedActionContext, payload: number): void
  [ActionTypes.ADD_COUNT_2]({ commit }: AugmentedActionContext, payload: number): void
  [ActionTypes.MINUS_COUNT_2]({ commit }: AugmentedActionContext, payload: number): void
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.ADD_COUNT_1]({ commit, state }, count) {
    const newCount = state.count1 + count
    commit(MutationTypes.UPDATE_COUNT_1, newCount)
  },
  [ActionTypes.MINUS_COUNT_1]({ commit, state }, count) {
    const newCount = state.count1 - count
    commit(MutationTypes.UPDATE_COUNT_1, newCount)
  },
  [ActionTypes.ADD_COUNT_2]({ commit, state }, count) {
    const newCount = state.count2 + count
    commit(MutationTypes.UPDATE_COUNT_2, newCount)
  },
  [ActionTypes.MINUS_COUNT_2]({ commit, state }, count) {
    const newCount = state.count2 - count
    commit(MutationTypes.UPDATE_COUNT_2, newCount)
  },
}
