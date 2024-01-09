import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../language'

const router = createRouter({
  history: createWebHashHistory(),
  // strict: true, // applies to all routes
  routes: [
    {
      path: '/:lang?', // <--- 5
      name: 'home',
      component: HomeView
    },
    {
      path: '/:lang?/about',  // <--- 6
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
      // {
      //   path: '/', // <--- 5
      //   name: 'home',
      //   component: HomeView
      // },
      // {
      //   path: '/about',  // <--- 6
      //   name: 'about',
      //   component: () => import('../views/AboutView.vue')
      // },
  ]
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en' // 获取语言设置，如果没有则默认为 'zh'
  console.log(to.params)
  if (['zh', 'en'].includes(lang as string)) {
    i18n.global.locale.value = lang
  } else {
    i18n.global.locale.value = 'en'
  }
  next()
})

export default router
