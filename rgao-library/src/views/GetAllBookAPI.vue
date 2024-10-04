<template>
    <!-- <div class="container py-5">
        <h1>All Books (JSON Format)</h1>
        <hr />
        <pre>{{ books }}</pre>
    </div> -->
    <pre>{{ books }}</pre>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import db from '@/firebase/init';


const books = ref([]);

const getAllBooks = async () => {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return booksList;
};

onMounted(async () => {
    books.value = await getAllBooks(); // Fetch all books on component mount
});


</script>