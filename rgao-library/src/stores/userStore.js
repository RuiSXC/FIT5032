import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(localStorage.getItem('user') !== null);

  const saveUser = (userData) => {
    if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
        isAuthenticated.value = true;
    }
  };

  const removeUser = () => {
    localStorage.removeItem('user');
    isAuthenticated.value = false;
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  }

  return { isAuthenticated, saveUser, removeUser, getUser };
});
