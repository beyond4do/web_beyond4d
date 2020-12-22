import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('@/views/Works.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('@/views/Member.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/privacy_policy',
    name: 'Privacy',
    component: () => import('@/views/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/Terms.vue')
  }
]

const router = new VueRouter({
  // TODO: github.ioで404のリダイレクト処理入れれるようになったら…
  // mode: 'history',
  // base: process.env.NODE_ENV === 'production' ? 'be4d_web/' : '',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // ページ遷移時にトップへ移動
    return { x: 0, y: 0 }
  }
})

export default router
