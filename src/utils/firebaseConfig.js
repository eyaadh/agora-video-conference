import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDsktIaM2xCwShi0hIC_5uHeTmonhNyVdo",
  authDomain: "agora-test-83555.firebaseapp.com",
  projectId: "agora-test-83555",
  storageBucket: "agora-test-83555.appspot.com",
  messagingSenderId: "322397436308",
  appId: "1:322397436308:web:b54a5de06711e44185b781"
}

initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }