import { useRouter } from 'next/router'
import styles from '../styles/sass.module.sass'
import { useState } from 'react'
import { auth } from './_firebase'
import {signInWithEmailAndPassword } from "firebase/auth";
import { FaSignal } from 'react-icons/fa'

const Withdraw = () => {
  const router = useRouter()

   return (<>
   <header></header>
   <main>
     hello
   </main>
  </>
  )
}

export default Withdraw
