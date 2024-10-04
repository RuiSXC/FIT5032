<template>
    <div class="container py-5">
        <div class="text-center">
            <h1 class="mb-3">Get Book Count</h1>
            <button class="btn btn-primary" @click="getBookCount">Get Book Count</button>
            <p class="mb-3" v-if="count != null">Total number of books: {{ count }} </p>
            <p class="mb-3" v-if="error"> {{ error }}</p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const count = ref(null);
const error = ref(null);

const getBookCount = async () => {
    try {
        const response = await axios.get('https://countbooks-dtz4yyicyq-uc.a.run.app');
        count.value = response.data.count;
        error.value = null;
    } catch (err) {
        console.log('Error fetching book count: ', error);
        error.value = err.response.data.error;
        count.value = null;
    }
}
</script>