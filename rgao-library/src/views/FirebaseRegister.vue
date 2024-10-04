<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 p-5">
                <form @submit.prevent="register" class="justify-content-center align-items-center">
                    <h1 class="text-center py-4">Create an Account</h1>
                    <div class="form-group mb-3">
                        <label for="email">Email address</label>
                        <input v-model="email" id="email" type="email" class="form-control" placeholder="Enter email"
                            required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Email address</label>
                        <input v-model="password" id="password" type="password" class="form-control"
                            placeholder="Password" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="role">Role: </label>
                        <select v-model="role" id="role" class="form-select" required>
                            <option>user</option>
                            <option>admin</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in via Firebase</button>
                </form>
            </div>
        </div>
    </div>

</template>
<script setup>

import { ref } from "vue"
import { useRouter } from "vue-router"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const email = ref("")
const password = ref("")
const role = ref("")

const auth = getAuth()
const db = getFirestore()
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // save user data to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                role: role.value
            });

            alert("User created successfully");
            router.push("/FireLogin")
        }).catch((error) => {
            console.log(error)
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                alert(error.message);
            }
        })
}
</script>