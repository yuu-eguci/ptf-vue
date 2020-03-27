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
      // :locale 動的セグメントです。
      path: '/:locale',
      component: App,
      beforeEnter(to, from, next) {
        // URL の locale を i18n.locale にセットします。
        if (['en', 'ja', 'ro'].includes(to.params.locale)) {
          // OK.
        } else {
          return next('en')
        }
        i18n.locale = to.params.locale
        return next()
      },
      children: [
        {
          path: '',
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

export default router
