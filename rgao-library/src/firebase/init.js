// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQViB1LVbU76Y6WJESzQiWqXp57DPz7Zs',
  authDomain: 'ruivue-895ff.firebaseapp.com',
  projectId: 'ruivue-895ff',
  storageBucket: 'ruivue-895ff.appspot.com',
  messagingSenderId: '881248887305',
  appId: '1:881248887305:web:4bb6b825ecd34dbf0d0ed8'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()
export default db
