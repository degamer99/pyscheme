// import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/signup.module.sass'
import { useState } from 'react'
import { auth, add } from './_firebase'
import { sendEmailVerification,updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { FaSignal } from 'react-icons/fa'


const SignUp = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [referer, setReferer] = useState("")
    const [phone, setPhone] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [username, setUsername] = useState("")
    
    const signup = (e) => {
      e.preventDefault;
      console.log({first, last, phone, password, email})
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
      // console.log(user)
        updateProfile(auth.currentUser, {
          displayName: `${first} ${last}`,
          phoneNumber: phone}).
          then(() => {
            sendEmailVerification(auth.currentUser)
              .then((log) => {
                add( `${first} ${last}`, {username, amount: 0.00});
                router.push("./home")
              }).catch((err) => {
                console.log(err)
              })
            })
          })
        }
  return (
  <main className={styles.main}>
    <div className={styles.logo}>
      <FaSignal style={{fontSize: "2rem"}} />
      <h1>Pyscheme</h1>
    </div>
    <form className={styles.form}>
        <div>
            <label htmlFor="first">First Name </label>
            <input type="text" name="first" id="first" placeholder="John" value={first} onChange={ e => setFirst(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="last">Last Name</label>
            <input type="text" name="last" id="last" placeholder="Martin" value={last} onChange={ e => setLast(e.target.value)} />
        </div>
        <div>
            <label htmlFor="user">Username</label>
            <input type="text" name="user" id="user" value={username} onChange={ e => setUsername(e.target.value)} />
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
        <div>
            <label htmlFor="confirm">Confirm Password</label>  
            <input type="password" placeholder="**************"  value={confirm} onChange={(e)=> setConfirm(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="refer">Referral code</label>  
            <input type="text" placeholder="Optional"  value={referer} onChange={(e)=> setReferer(e.target.value)}/>
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
