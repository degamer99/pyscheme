import { useRouter } from 'next/router'
import styles from '../styles/home.module.sass'
import { useState, useEffect, useRef } from 'react'
import { FaCog, FaGift, FaHome, FaRegEye, FaRegEyeSlash, FaRegMoneyBillAlt } from "react-icons/fa";
import { VscSettingsGear, VscHome } from "react-icons/vsc";
// import * as dotenv from 'dotenv';
// dotenv.config();
import { MdShare, MdOutlineDashboard } from "react-icons/md";
import { usePaystackPayment } from 'react-paystack';
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth, add, generate } from './_firebase';

// console.log(process.env.test_key);
// you can call this function anything
const onSuccess = (reference) => {
// Implementation for whatever you want to do with reference and after success call.
console.log(reference);
// return reference
};

// you can call this function anything
const onClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}

const PaystackHookExample = ({ email }) => {
  const initializePayment = usePaystackPayment({
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: 20000,
    publicKey: process.env.public_key,
  });
  return (
    <div className={styles.paystack} >
        <button onClick={() => {
          initializePayment(onSuccess, onClose)
        }}>Register</button>
    </div>
  );
};


const Home = () => {
  const [email, setEmail] = useState("")
  const [referals, setReferals] = useState(0)
  const router = useRouter()
  const modalRef = useRef()
  const toSettings = () => {
    router.push("./settings")
  }
  const toWithdraw = () => {
    router.push("./withdraw")
  }
  
  useEffect( ()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setEmail(user.email);
        console.log(user)
        console.log(uid.substring(0, 5))
      } else {
        router.push("./")
      }
    })
  }, [])
  return (<>
      <header className={styles.head}>
        <div>
            <p> My Balance</p>
            <p>#2000</p>
            <p>Total Earning</p>
        </div>
        <div>
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
          <PaystackHookExample email={email} />
        </div>
        <div className={styles.middle}> 
        <h3> Your referals ({referals}) </h3>
        <p onClick={ e => modalRef.current.openModal()}><MdShare /></p>
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
        <dialog ref={modalRef}>
          <h1 onClick={ e => modalRef.current.close()}>hello and welcome</h1>
          <p>hello there</p>
        </dialog>
      </main>
      <footer className={styles.footer}>
        <div>
        <div>
            <FaHome  className={styles.icon}/>
            <p>Home</p>
        </div>
        <div>
            <FaRegMoneyBillAlt className={styles.icon} onClick={toWithdraw}/>
            <p>Withdraw</p>
        </div></div>
      </footer>
  </>
  )
}

export default Home
