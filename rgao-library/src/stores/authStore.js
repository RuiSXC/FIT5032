import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true');

  const login = (username, password) => {
    const hardcodedUsername = 'rgao0017@student.monash.edu';
    const hardcodedPassword = 'vuevue';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      isAuthenticated.value = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    isAuthenticated.value = false;
    localStorage.removeItem('isAuthenticated');
  };

  return { isAuthenticated, login, logout };
});
