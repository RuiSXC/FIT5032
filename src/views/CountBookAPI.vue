<template>
    <pre>{{ jsondata }}</pre>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const jsondata = ref(null);
const error = ref(null);

const getBookCountAPI = async () => {
    try {
        const response = await axios.get('https://countbooks-dtz4yyicyq-uc.a.run.app');
        jsondata.value = response.data;
        error.value = null;
    } catch (err) {
        console.log('Error fetching book count: ', error);
        error.value = err.response.data.error;
        jsondata.value = null;
    }
}

onMounted(() => {
    getBookCountAPI();
});
</script>