<template>
  <div class="page">
    <h2>Профиль ({{ auth.role }})</h2>
    <p>Email: {{ auth.email }}</p>

    <!-- Кнопка админа (только для админа) -->
    <button v-if="auth.isAdmin" @click="$router.push('/admin')" class="btn btn-admin">
      В панель админа
    </button>

    <!-- ВАРИАНТ 26: Кнопка запроса данных для пользователя -->
    <div v-if="auth.isUser" class="user-section">
      <button @click="fetchData" class="btn btn-user">
        Запросить данные (Вариант 26)
      </button>
      <pre v-if="data" class="data-box">{{ data }}</pre>
    </div>

    <button @click="logout" class="btn btn-danger">Выйти</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore() // хранилище
const router = useRouter()
const data = ref(null) // данные, полученные с API

// Выход
const logout = () => {
  auth.logout()
  router.push('/login')
}

// Запрос данных для пользователя (Вариант 26)
const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  data.value = await res.json()
}
</script>

<style scoped>
.page { max-width: 600px; margin: 40px auto; font-family: sans-serif; }
.btn { padding: 10px; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px; display: block; }
.btn-admin { background: #007bff; color: white; }
.btn-user { background: #42b983; color: white; }
.btn-danger { background: #c62828; color: white; }
.data-box { background: #f5f5f5; padding: 15px; margin-top: 10px; white-space: pre-wrap; border-radius: 6px; }
</style>