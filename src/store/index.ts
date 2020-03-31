import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { auth } from '@/store/modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    auth,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
}

export default new Vuex.Store<RootState>(store)
