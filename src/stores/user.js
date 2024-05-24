import { auth } from '@/firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import router from '../router/routes'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: null,
    loadingUser: false
  }),
  actions: {
    async registerUser(email, password) {
      this.loginUser = true
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        this.userData = { email: user.email, ui: user.uid }
        router.push('/user')
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingUser = false
      }
    },
    async loginUser(email, password) {
      this.loginUser = true
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        this.userData = { email: user.email, ui: user.uid }
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingUser = false
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
        this.userData = null
        router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
