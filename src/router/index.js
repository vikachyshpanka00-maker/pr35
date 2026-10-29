import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import AdminPage from '../pages/AdminPage.vue'
import { useAuthStore } from '../stores/auth'

// Маршруты
const routes = [
  { path: '/login', component: LoginPage }, // страница входа
  { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } }, // профиль (только для авторизованных)
  { path: '/admin', component: AdminPage, meta: { requiresAuth: true, requiresAdmin: true } }, // админка (только для админа)
  { path: '/', redirect: '/profile' } // главная -> профиль
]

const router = createRouter({ history: createWebHistory(), routes })

// Защита маршрутов
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) return next('/login') // если не авторизован — на логин
  if (to.meta.requiresAdmin && !auth.isAdmin) return next('/profile') // если не админ — в профиль
  next()
})

export default router