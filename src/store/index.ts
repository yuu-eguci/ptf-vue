import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { auth } from '@/store/modules/auth'
import { i18n } from '@/store/modules/i18n'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    auth,
    i18n,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
}

export default new Vuex.Store<RootState>(store)
