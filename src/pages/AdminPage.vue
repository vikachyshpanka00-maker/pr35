<template>
  <div class="page">
    <h2>Панель администратора</h2>
    <p>Здесь только администраторы.</p>
    <button @click="$router.push('/profile')" class="btn">← Назад</button>
  </div>
</template>

<style scoped>
.page { max-width: 600px; margin: 40px auto; font-family: sans-serif; }
.btn { padding: 10px; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; background: transparent; margin-top: 20px; }
</style>