<script setup>
import { useAuthStore } from './stores/auth'
const auth = useAuthStore() // проверяем авторизацию
</script>

<template>
  <!-- Шапка с навигацией -->
  <nav class="navbar">
    <RouterLink to="/profile" v-if="auth.isAuthenticated">Профиль</RouterLink>
    <RouterLink to="/login" v-else>Войти</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.navbar { padding: 1rem; border-bottom: 1px solid #eee; text-align: center; font-family: sans-serif; }
.navbar a { margin: 0 10px; color: #1a1a1a; font-weight: bold; text-decoration: none; }
</style>