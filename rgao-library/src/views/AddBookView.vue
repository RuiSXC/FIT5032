<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 p-5">
                <form @submit.prevent="addBook" class="flex">
                    <h1 class="text-center py-5">Add Book</h1>
                    <div class="form-group mb-3">
                        <label for="isbn">ISBN:</label>
                        <input v-model="isbn" id="isbn" type="text" class="form-control" placeholder="eg. 978-3-16-148410-0" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="isbn">Name:</label>
                        <input v-model="name" id="name" type="text" class="form-control" placeholder="Enter name of the book" required />
                    </div>
                    <button class="btn btn-primary" type="submit">Add Book</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import db from '@/firebase/init'
import { collection, addDoc } from 'firebase/firestore'

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
        alert('Book added successfully')
    } catch (error) {
        console.error('Error adding book: ', error)
    }
}

</script>