import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/sass.module.sass'
import { useState } from 'react'
import { auth } from './_firebase'
import {signInWithEmailAndPassword } from "firebase/auth";
import { FaSignal } from 'react-icons/fa'

const Index: NextPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEmail, setIsEmail] = useState(true)

  const signin = (e:any)=>{
      e.preventDefault;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push("/home")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
  <main className={styles.main}>
    <div className={styles.logo}>
      <FaSignal style={{fontSize: "2rem"}} />
      <h1>Pyscheme</h1>
    </div>
    <form className={styles.form}>
      <label htmlFor="email">{ isEmail ? "Email Address" : "Phone Number"}</label>
      <input type="email" value={email} placeholder={isEmail ? "Enter your email address" : "Enter your phone number"} onChange={(e)=> setEmail(e.target.value)}/>
      <label htmlFor="password">Password</label>
      <input type="password"  value={password} placeholder="**********" onChange={(e)=> setPassword(e.target.value)}/>
      <span onClick={ e => router.push("/signup")}> Don't have an account? Sign Up </span>
      <button type="button" onClick={signin}>Sign In </button>
    </form>
  </main>
  )
}

export default Index
