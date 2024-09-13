<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <li v-if="!userStore.isAuthenticated" class="nav-item">
          <router-link to="/firelogin" class="nav-link" active-class="active"
            aria-current="page">FireLogin</router-link>
        </li>
        <li v-if="!userStore.isAuthenticated" class="nav-item">
          <router-link to="/fireregister" class="nav-link" active-class="active"
            aria-current="page">FireRegister</router-link>
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
        <li v-if="userStore.isAuthenticated" class="nav-item">
          <button @click="logout" class="nav-link" >Logout</button>
        </li>
        
        <!-- <li class="nav-item">
          <router-link v-if="authStore.isAuthenticated" @click="logout" to="/login" class="nav-link"
            active-class="active">Logout</router-link>
          <router-link v-else to="/login" class="nav-link" active-class="active">Login</router-link>
        </li> -->
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
