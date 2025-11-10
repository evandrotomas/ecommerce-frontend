import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCCpz1hNQ3Ls9qG3xoXTE7qrWCaKW3NOQA',
  authDomain: 'ecommerce-f2bd7.firebaseapp.com',
  projectId: 'ecommerce-f2bd7',
  storageBucket: 'ecommerce-f2bd7.firebasestorage.app',
  messagingSenderId: '601920995631',
  appId: '1:601920995631:web:cb9023afa3d6a5178da1da'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
