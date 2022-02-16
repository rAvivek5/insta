// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYbJqV5xB39R6ya991gpOFf3qmdAhBG9I',
  authDomain: 'insta-3-try.firebaseapp.com',
  projectId: 'insta-3-try',
  storageBucket: 'insta-3-try.appspot.com',
  messagingSenderId: '109887270685',
  appId: '1:109887270685:web:771fed5a382afb222bbbf4',
  measurementId: 'G-TKEVDPFEF5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
