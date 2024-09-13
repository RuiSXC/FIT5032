<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 p-5">
                <form @submit.prevent="updateBook" class="flex">
                    <h1 class="text-center py-5">Edit Book</h1>
                    <div class="form-group mb-5">
                        <label for="isbn">ISBN: </label>
                        <select v-model="selectedIsbn" id="isbn" class="form-select" required>
                            <option value="" disabled selected>Please select a book</option>
                            <option v-for="book in books" :key="book.isbn" :value="book.isbn">{{ book.name }}</option>
                        </select>
                    </div>

                    <div class="form-group mb-3">
                        <label for="newIsbn">New ISBN:</label>
                        <input v-model="newIsbn" id="newIsbn" type="text" class="form-control"
                            placeholder="eg. 978-3-16-148410-0" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="newName">New Name:</label>
                        <input v-model="newName" id="newName" type="text" class="form-control"
                            placeholder="eg. The Catcher in the Rye" />
                    </div>
                    <div class="form-group mt-4">
                        <button type="submit" class="btn btn-primary me-2">Update Book</button>
                        <button @click.prevent="deleteBook" class="btn btn-danger me-2">Delete Book</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { getDocs, collection, doc, updateDoc, deleteDoc,  query, orderBy  } from 'firebase/firestore';
import db from '@/firebase/init';

const selectedIsbn = ref(""); // Store the currently selected book's ISBN
const newIsbn = ref(""); // Store the new ISBN entered by the user
const newName = ref(""); // Store the new name entered by the user
const books = ref([]); // Store the list of books fetched from Firestore

// Fetch all books from Firestore and populate the books array
const fetchBooks = async () => {
    const q = query(collection(db, 'books'), orderBy('name'));
    const querySnapshot = await getDocs(q);
    books.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};


// Watch for changes in the selected ISBN and automatically populate the form fields
watch(selectedIsbn, (newIsbnValue) => {
    const selectedBook = books.value.find(b => b.isbn === newIsbnValue);
    if (selectedBook) {
        newIsbn.value = selectedBook.isbn; // Set the new ISBN to the selected book's ISBN
        newName.value = selectedBook.name; // Set the new name to the selected book's name
    }
});

// Update the selected book with the new ISBN and/or name
const updateBook = async () => {
    if (selectedIsbn.value && (newIsbn.value || newName.value)) {
        const book = books.value.find(b => b.isbn === selectedIsbn.value);
        const bookRef = doc(db, 'books', book.id);

        // Create an object with updated fields
        const updatedData = {};
        if (newIsbn.value) updatedData.isbn = newIsbn.value;
        if (newName.value) updatedData.name = newName.value;

        await updateDoc(bookRef, updatedData);
        alert('Book updated successfully!');
        fetchBooks(); // Reload books to reflect changes
    } else {
        alert('Please select a book and enter new information to update.');
    }
};

// Delete the selected book from Firestore
const deleteBook = async () => {
    if (selectedIsbn.value && confirm('Are you sure you want to delete this book?')) {
        const book = books.value.find(b => b.isbn === selectedIsbn.value);
        const bookRef = doc(db, 'books', book.id);

        await deleteDoc(bookRef);
        alert('Book deleted successfully!');
        fetchBooks(); // Reload books to reflect deletion
        selectedIsbn.value = ""; // Clear the selection
        newIsbn.value = ""; // Clear the form fields
        newName.value = ""; // Clear the form fields
    } else {
        alert('Please select a book to delete.');
    }
};

// Fetch books on component mount
onMounted(() => {
    fetchBooks();
});
</script>