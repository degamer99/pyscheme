import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/signup.module.sass'
import { useState } from 'react'
import { auth } from './_firebase'
import { sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";
import { FaSignal } from 'react-icons/fa'


const SignUp: NextPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    
    const signup = (e:any) => {
      e.preventDefault;
      console.log({first, last, phone, password, email})
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("email sent")
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      })
      router.push("./home")
      // ...
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
  <main className={styles.main}>
    <div className={styles.logo}>
      <FaSignal style={{fontSize: "2rem"}} />
      <h1>Pyscheme</h1>
    </div>
    <form className={styles.form}>
        <div>
            <label htmlFor="">First Name </label>
            <input type="text" name="first" id="first" placeholder="John" value={first} onChange={ e => setFirst(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Last Name</label>
            <input type="text" name="last" id="last" placeholder="Martin" value={last} onChange={ e => setLast(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" value={email} placeholder="Enter your email address" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="phoneNo">Phone Number</label>
            <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label>  
            <input type="password" placeholder="**************"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
      <span onClick={ e => router.push("/")}> Already have an account? Sign in </span>
      <button type="button" onClick={e => signup(e)}>Sign Up </button>
    </form>
    <div>
      {/* <Logo /> */}
    </div>
  </main>
  )
}

export default SignUp
