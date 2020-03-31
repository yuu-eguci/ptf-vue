import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import { AuthState, RootState } from '@/store/types';

const state: AuthState = {
  authToken: '',
}

// GetterTree<AuthState, RootState> この部分よくわかってない。
const getters: GetterTree<AuthState, RootState> = {
  authToken: (state: AuthState) => {
    return state.authToken
  },
}

const mutations: MutationTree<AuthState> = {
  create: (state: AuthState, newToken: string) => {
    state.authToken = newToken
  },
  destroy: (state: AuthState) => {
    state.authToken = ''
  },
}

// サンプルであって、サーバサイドはないのでスルーします。
const actions: ActionTree<AuthState, RootState> = {
  // async({ commit, dispatch }, newToken: string) この部分よくわかってない。
  // create: async({ commit, dispatch }, newToken: string) => {
    // こういう記事もあったし……
    // if (await someAsyncAddMethod(newToken)) {
    //   commit('create', newToken)
    //   return true
    // }
    // return false

    // こういう記事もあった。何がいいのかはわからない。
    // dispatch(
    //   'http/post',
    //   { url: '/auth', data, error: 'message.unauthorized' },
    //   { root: true}
    // ).then(res => commit('create', res.data)
    // ).catch(err => err)
  // },

  // destroy: async ({ commit, dispatch }, id: string) => {
    // こういう記事もあったし……
    // if (await someAsyncRemoveMethod(id)) {
    //   commit('destroy', id)
    //   return true
    // }
    // return false

    // こういう記事もあった。何がいいのかはわからない。
    // dispatch(
    //   'http/delete',
    //   { url: '/auth', id },
    //   { root: true }
    // ).then(
    //   res => commit('create', res.data)
    // ).catch(
    //   err => err
    // ).finally(
    //   res => commit('destroy')
    // )
  // },
}

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
