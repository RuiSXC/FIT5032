<script setup>
// import LoginForm from './components/LoginForm.vue'
// import Json from './components/JSON.vue'
// import HomeView from './views/HomeView.vue'
import { computed } from 'vue';
import BHeader from './components/BHeader.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const showHeader = computed(() => !['CountBookAPI', 'GetAllBookAPI'].includes(route.name));
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
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
