import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/home.module.sass'
import { useState, useEffect } from 'react'
import { FaCog, FaGift, FaHome, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { VscSettingsGear, VscHome } from "react-icons/vsc";

import { MdShare, MdOutlineDashboard } from "react-icons/md";
import { usePaystackPayment } from 'react-paystack';
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth, add } from './_firebase';


// you can call this function anything
const onSuccess:any = (reference: any) => {
// Implementation for whatever you want to do with reference and after success call.
console.log(reference);
// return reference
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
 
  const [info, setInfo] = useState({p1: "Available Balance", h3: "#2000", p2: "Total Balance", eye: <FaRegEyeSlash />})
  const [altInfo, setaltInfo] = useState({p1: "Today is", h3: " 13 September", p2: "2022", eye: <FaRegEye />})
  const [ change, setChange ] = useState(true)
  const [referals, setReferals] = useState(0)
  const router = useRouter()
  const toSettings = () => {
    console.log("")
    router.push("./settings")
  }
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
          <span onClick={ toSettings }>
            {/* <FaCog /> */}
            <VscSettingsGear />
          </span>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.member}>
          <h3>Become a Member</h3>
          <p>Enjoy cool benefits, cash prizes and rewards, perform tasks and activities, earn cash through your affiliate link when someone registers.</p>
          <PaystackHookExample />
        </div>
        <div className={styles.middle}> 
        <h3> Your referals ({referals}) </h3>
        <p><MdShare /></p>
        </div>
        <section className={styles.referrals}>
          <article>
            <div>
              <h4>Name</h4>
              <p>#500</p>
            </div>
            <div>
              <h4>Total reward</h4>
              <p>#500</p>
            </div>
          </article>
          <article>
            <div>
              <h4>Name</h4>
              <p>#500</p>
            </div>
            <div>
              <h4>Total reward</h4>
              <p>#500</p>
            </div>
          </article>
          <article>
            <div>
              <h4>Name</h4>
              <p>#500</p>
            </div>
            <div>
              <h4>Total reward</h4>
              <p>#500</p>
            </div>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
        <div>
            <MdOutlineDashboard className={styles.icon}/>
            <p>Home</p>
        </div>
        <div>
            <VscSettingsGear className={styles.icon}/>
            <p>Withdraw</p>
        </div></div>
      </footer>
  </>
  )
}

export default Home
