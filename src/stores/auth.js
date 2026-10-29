import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  // Состояние (данные)
  state: () => ({
    token: localStorage.getItem('auth_token') || null, // токен из localStorage
    role: localStorage.getItem('auth_role') || null, // роль (user или admin)
    email: null // email пользователя
  }),

  // Геттеры (вычисляемые свойства)
  getters: {
    isAuthenticated: (state) => !!state.token, // авторизован ли пользователь
    isAdmin: (state) => state.role === 'admin', // админ ли он
    isUser: (state) => state.role === 'user' // обычный пользователь ли он
  },

  // Действия (изменение состояния)
  actions: {
    login({ username, password }) {
      // Демо-проверка логина и пароля
      if (username === 'admin' && password === 'admin123') {
        this.token = 'fake-admin-token'; this.role = 'admin'; this.email = 'admin@example.com';
      } else if (username === 'user' && password === 'user123') {
        this.token = 'fake-user-token'; this.role = 'user'; this.email = 'user@example.com';
      } else {
        throw new Error('Неверный логин или пароль');
      }
      // Сохраняем в localStorage
      localStorage.setItem('auth_token', this.token);
      localStorage.setItem('auth_role', this.role);
    },
    logout() {
      this.token = null; this.role = null; this.email = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_role');
    }
  }
})