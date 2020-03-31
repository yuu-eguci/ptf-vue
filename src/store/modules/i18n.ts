import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import { I18nState, RootState } from '@/store/types';

const state: I18nState = {
  // デフォルトの locale を en とします。
  locale: 'en',
}

// GetterTree<I18nState, RootState> この部分よくわかってない。
const getters: GetterTree<I18nState, RootState> = {
  locale: (state: I18nState) => {
    return state.locale
  },
}

const mutations: MutationTree<I18nState> = {
  set: (state: I18nState, newLocale: string) => {
    state.locale = newLocale
  },
  remove: (state: I18nState) => {
    state.locale = ''
  },
}

const actions: ActionTree<I18nState, RootState> = {
}

export const i18n: Module<I18nState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
