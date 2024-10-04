<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <form @submit.prevent="addBook" class="flex">
                    <h1 class="text-center my-5">Add Book</h1>
                    <div class="form-group mb-3">
                        <label for="isbn">ISBN:</label>
                        <input v-model="isbn" id="isbn" type="text" class="form-control" placeholder="eg. 9783161484100"
                            required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="isbn">Name:</label>
                        <input v-model="name" id="name" type="text" class="form-control"
                            placeholder="Enter name of the book" required />
                    </div>
                    <button class="btn btn-primary" type="submit">Add Book</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center mt-5 mb-3">Added Books</h1>
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th>ISBN</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.isbn">
                            <td>{{ book.isbn }}</td>
                            <td>{{ book.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import db from '@/firebase/init'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const books = ref([]);
const isbn = ref('')
const name = ref('')

const addBook = async () => {
    try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number')
            return
        }

        await addDoc(collection(db, 'books'), {
            isbn: isbnNumber,
            name: name.value
        })

        isbn.value = ''
        name.value = ''
        updateBookList()
        alert('Book added successfully')
    } catch (error) {
        console.error('Error adding book: ', error)
    }
}


const updateBookList = async () => {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);
    books.value = booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

onMounted(() => {
    updateBookList();
});

</script>