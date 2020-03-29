import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import i18n from '@/i18n'

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
          path: 'home',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
          path: 'about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
          path: 'admin',
          name: 'Admin',
          component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
          // Admin ページを表示するためには認証が必要であるとします。
          meta: { requiredAuth: true },
        },
        {
          path: '',
          name: 'Ptf',
          component: () => import(/* webpackChunkName: "ptf" */ '../views/Portfolio.vue'),
        }
      ]
    },
    // 想定外の URL は /en へリダイレクトします。
    {
      path: '*',
      redirect: '/en',
    },
  ],
})

router.beforeEach((to, from, next) => {
  // URL の locale を i18n.locale にセットします。
  if (['en', 'ja', 'ro'].includes(to.params.locale)) {
    // OK.
  } else {
    return next('en')
  }
  i18n.locale = to.params.locale

  // meta: { requiredAuth: true } を指定した route のときこれが true になります。
  if (to.matched.some(record => record.meta.requiredAuth)) {
    // 今回はてきとうに、 GET クエリに auth=ok があったときとします。
    if (to.query.auth === 'ok') {
      // ok ならそのまま流して、 next() を実行します。
      console.info('認証 ok')  // eslint-disable-line no-console
    } else {
      // ng ならトップへ。
      console.info('認証 ng')  // eslint-disable-line no-console
      next({
        name: 'Home', query: { redirect: to.fullPath }
      })
      return
    }
  }

  // beforeEnter では next() を呼ばないといけない。
  next()
})

export default router
