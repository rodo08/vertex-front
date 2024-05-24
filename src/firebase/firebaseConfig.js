import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3RmYDkqhMZ3PxkMF4G2uaSOufGJjSo7s',
  authDomain: 'vertex-5b698.firebaseapp.com',
  projectId: 'vertex-5b698',
  storageBucket: 'vertex-5b698.appspot.com',
  messagingSenderId: '919911017776',
  appId: '1:919911017776:web:dc42c0bd66a731980a6cf5'
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
