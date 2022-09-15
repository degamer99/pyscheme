import type { NextPage } from 'next'
import styles from '../styles/home.module.sass'
import { useState, useEffect } from 'react'
import { FaCog, FaGift, FaHome, FaEye, FaRegEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import { usePaystackPayment } from 'react-paystack';
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth } from './_firebase';


// you can call this function anything
const onSuccess = (reference:any) => {
// Implementation for whatever you want to do with reference and after success call.
console.log(reference);
};

// you can call this function anything
const onClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}

const PaystackHookExample = () => {
  const [email, setEmail] = useState("olayinkabello962@gmail.com")
  const initializePayment = usePaystackPayment({
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: 50000,
    publicKey: 'pk_test_53a3cc9fe7a3f310c0450dea00881d21796739cf',
  });
  return (
    <div className={styles.paystack} >
        <button onClick={() => {
          initializePayment(onSuccess, onClose)
        }}>Register</button>
    </div>
  );
};


const Home: NextPage = () => {
  useEffect( ()=>{
    // why does my use effect code run twice 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email
        console.log({homePage: uid, user, email, he: "he is a boy"})
      
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  },[])
  const [info, setInfo] = useState({p1: "Available Balance", h3: "#2000", p2: "Total Balance", eye: <FaRegEyeSlash />})
  const [altInfo, setaltInfo] = useState({p1: "Today is", h3: " 13 September", p2: "2022", eye: <FaRegEye />})
  const [ change, setChange ] = useState(true)
  return (<>
      <header className={styles.head}>
        <div>
            <p>{ change ? info.p1 : altInfo.p1} </p>
            <p>{ change ? info.h3 : altInfo.h3}</p>
            <p>{ change ? info.p2 : altInfo.p2}</p>
        </div>
        <div>
          <span onClick={ e => setChange( x => !x)}>
          { change ? info.eye : altInfo.eye}
          </span>
          <span>
            <FaCog />
          </span>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <h3>Become a Member</h3>
          <p>Enjoy cool benefits, cash prizes and rewards, perform tasks and activities, earn cash through your affiliate link when someone registers.</p>
          <PaystackHookExample />
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
        <div>
            <FaHome className={styles.icon}/>
            <p>Home</p>
        </div>
        <div>
            <span className={styles.back}>
              <FaGift className={styles.center} style={{transform: "scale(1.5)"}}/>
            </span>
            <p>Earn</p>
        </div>
        <div>
            <FaCog className={styles.icon}/>
            <p>Withdraw</p>
        </div></div>
      </footer>
  </>
  )
}

export default Home
