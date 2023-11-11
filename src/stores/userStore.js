import {defineStore} from "pinia"
import {
  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "firebase/auth"
import {auth} from "@/utils/firebaseConfig"

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    loadingUser: false,
    loadingSession: false,
    rtcToken: null,
    channelToJoin: null,
  }),
  actions: {
    async registerUser(email, password) {
      return new Promise(async (resolve, reject) => {
        this.loadingUser = true
        try {
          const {user} = await createUserWithEmailAndPassword(auth, email, password)
          this.userData = {
            email: user.email,
            uid: user.uid
          }
          resolve(user)
        } catch (error) {
          console.log(error)
          reject(error)
        } finally {
          this.loadingUser = false
        }
      })

    },
    async loginUser(email, password) {
      return new Promise(async (resolve, reject) => {
        this.loadingUser = true
        try {
          const {user} = await signInWithEmailAndPassword(auth, email, password)
          this.userData = {email: user.email, uid: user.uid}
          resolve(user)
        } catch (error) {
          console.error(error)
          reject(error.message)
        } finally {
          this.loadingUser = false
        }
      })
    },
    async logoutUser() {
      return new Promise(async (resolve, reject) => {
        try {
          await signOut(auth)
          this.userData = null
          resolve(true)
        } catch (error) {
          console.log(error)
          reject(error)
        }
      })

    },
    currentUser() {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.userData = {
              email: user.email, uid: user.uid,
            }
          } else {
            this.userData = null
          }
          resolve(user)
        }, (e) => reject(e))
      })
    },
  },
})