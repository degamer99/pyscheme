import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/settings.module.sass'
import { useEffect, useState } from 'react'
import { auth } from './_firebase'
import {sendEmailVerification , onAuthStateChanged, updateProfile} from "firebase/auth";
import { FaSignal } from 'react-icons/fa'

const Settings: NextPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEmail, setIsEmail] = useState(true)
  const [account, setAccount] = useState({email: '', phoneNumber: ""})

  useEffect( ()=>{
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setAccount(user)
        const uid = user.uid;
        const email = user.email
        console.log(user)
        // ...
      } else {
        // User is signed out
        console.log("suth is out ")
        router.push("./")
        // ...
      }
    })
  }, [])
  const signOut = () =>{
    auth.signOut()
  }
  return (<>
  <header>

  </header>
  <main className={styles.main}>
    <section>

    </section>
    <section>
      <article>
        <div>
          <h3>Email address</h3>
          <p>{account.email}</p>
        </div>
        <div>
          <button> Edit</button>
        </div>
      </article>
      <article>
        <div>
          <h3>Phone number</h3>
          <p>{account.phoneNumber}</p>
        </div>
        <div>
          <button> Edit</button>
        </div>
      </article>
    </section>
    <footer className={styles.footer}>
      <p onClick={signOut}>Logout</p>
    </footer>
  </main>
  </>
  )
}

export default Settings
