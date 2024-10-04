<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul v-if="userStore.isAuthenticated" class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBookAPI" class="nav-link" active-class="active">Get All Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/editbook" class="nav-link" active-class="active">Edit Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <button @click="logout" class="nav-link">Logout</button>
        </li>
      </ul>

      <ul v-else class="nav nav-pills">
        <!-- <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/firelogin" class="nav-link" active-class="active"
            aria-current="page">FireLogin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/fireregister" class="nav-link" active-class="active"
            aria-current="page">FireRegister</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
// import { useAuthStore } from '@/stores/authStore';
// import { useRouter } from 'vue-router';

// const router = useRouter();
// const authStore = useAuthStore();

// const logout = () => {
//   authStore.logout();
//   router.push('/login');
// };

import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { onMounted } from 'vue';

const router = useRouter();
const userStore = useUserStore()

const logout = () => {
  console.log('Current User: ', userStore.getUser());
  userStore.removeUser()
  router.push('/firelogin');
}

onMounted(() => {
  console.log(userStore.isAuthenticated)
})


</script>
