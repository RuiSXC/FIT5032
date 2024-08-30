<script setup>
// import LoginForm from './components/LoginForm.vue'
// import Json from './components/JSON.vue'
// import HomeView from './views/HomeView.vue'
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>
    <main class="main-box">
      <RouterView></RouterView>
    </main>
  </div>
  <!-- <Json /> -->
  <!-- <LoginForm /> -->
  <!-- <HomeView /> -->

</template>
