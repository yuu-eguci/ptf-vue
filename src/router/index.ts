import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import i18n from '@/i18n'
import Store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // :locale 動的セグメントです。これをもとに beforeEach 内で i18n.locale をセットします。
      path: '/:locale',
      component: App,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        },
        {
          path: 'about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        },
        {
          path: 'ptf',
          name: 'Ptf',
          component: () => import(/* webpackChunkName: "ptf" */ '../views/Portfolio.vue'),
        },
        {
          path: 'signin',
          name: 'SignIn',
          component: () => import(/* webpackChunkName: "signin" */ '../views/SignIn.vue'),
        },
        {
          path: 'signinuseronly',
          name: 'SignInUserOnly',
          component: () => import(/* webpackChunkName: "signinuseronly" */ '../views/SignInUserOnly.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'signout',
          name: 'SignOut',
          component: () => import(/* webpackChunkName: "signout" */ '../views/SignOut.vue'),
          meta: { requiresAuth: true },
        },
      ]
    },
    // 想定外の URL は Vuex store にセットされている locale へリダイレクトします。
    {
      path: '*',
      redirect: '/' + Store.getters['i18n/locale'],
    },
  ],
})

router.beforeEach((to, from, next) => {
  // URL の locale を i18n.locale にセットします。
  if (['en', 'ja', 'ro'].includes(to.params.locale)) {
    // OK.
  } else {
    return next(Store.getters['i18n/locale'])
  }
  // URL で指定された locale を vue-i18n へセット。
  i18n.locale = to.params.locale
  // 同じく Vuex store へセット。
  Store.commit('i18n/set', to.params.locale)

  // サインインのサンプル。
  // Vuex の store に authToken がなんか入っているときサインイン中とする。
  // meta: { requiresAuth: true } を指定した route record のときこれが true になります。
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // token: トークンがあればログイン済みとしてみます。
  const authToken = Store.getters['auth/authToken']
  if (requiresAuth && !authToken) {
    return next({ name: 'SignIn' })
  }

  // beforeEnter では next() を呼ばないといけない。
  next()
})

export default router
