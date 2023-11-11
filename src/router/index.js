import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from "@/stores/userStore"

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore()
  userStore.loadingSession = true
  const user = await userStore.currentUser()
  if (!user) {
    await next("/login")
  } else {
    await next()
  }

  userStore.loadingSession = false
}


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue"),
      beforeEnter: requireAuth
    },
    {
      path: '/room',
      name: 'room',
      component: () => import("@/views/RoomView.vue"),
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    }
  ]
})
