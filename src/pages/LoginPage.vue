<template>
  <div class="page">
    <h2>Вход</h2>
    <input v-model="username" placeholder="Логин" class="input" />
    <input v-model="password" type="password" placeholder="Пароль" class="input" />
    <button @click="login" class="btn">Войти</button>
    <p v-if="error" class="error">{{ error }}</p>
    <p class="hint">admin/admin123 или user/user123</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('') // логин
const password = ref('') // пароль
const error = ref(null) // ошибка
const router = useRouter()
const auth = useAuthStore()

// Функция входа
const login = () => {
  try {
    auth.login({ username: username.value, password: password.value })
    router.push('/profile') // переходим в профиль
  } catch (e) {
    error.value = e.message // показываем ошибку
  }
}
</script>

<style scoped>
.page { max-width: 400px; margin: 100px auto; font-family: sans-serif; text-align: center; }
.input { display: block; width: 100%; margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 6px; }
.btn { width: 100%; padding: 10px; background: #1a1a1a; color: white; border: none; border-radius: 6px; cursor: pointer; }
.error { color: red; }
.hint { color: #888; font-size: 12px; margin-top: 20px; }
</style>