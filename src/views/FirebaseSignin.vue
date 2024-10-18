<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 p-5">
                <form @submit.prevent="register" class="justify-content-center align-items-center">
                    <h1 class="text-center py-4">Sign in</h1>
                    <div class="form-group mb-3">
                        <label for="email">Email address</label>
                        <input v-model="email" id="email" type="email"  class="form-control"  placeholder="Enter email" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Email address</label>
                        <input v-model="password" id="password" type="password" class="form-control" placeholder="Password" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="role">Role: </label>
                        <select v-model="role" id="role" class="form-select" required>
                            <option selected>user</option>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useUserStore } from "@/stores/userStore"

const email = ref("")
const password = ref("")
const role = ref("user")

const auth = getAuth()
const db = getFirestore()
const router = useRouter()
const userStore = useUserStore()

const register = () => {
    console.log(email.value, password.value, role.value)
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user

            // get user data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid))
            if (userDoc.exists()) {
                const userData = userDoc.data()
                switch (role.value) {
                    case 'admin':
                        if (userData.role !== 'admin')
                            throw new Error("Sorry, You are not an admin")
                        alert("You are login as admin")
                        break
                    case 'user':
                        alert("You are login as user")
                        break
                    default:
                        throw new Error("Unknown role: " + userData.role)
                }
                userData.role = role.value
                userStore.saveUser(userData)
            }
            console.log(auth.currentUser)
            router.push("/")
        }).catch((error) => {
            console.log(error)
            if(error.code ==='auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                alert(error.message)
            }
        })
}
</script>