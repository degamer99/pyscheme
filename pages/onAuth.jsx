import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { onAuthStateChanged} from "firebase/auth";
import { auth } from './_firebase';

export default function OnAuth ({children}){
    const router = useRouter();
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // setAccount(user)
            const uid = user.uid;
            const email = user.email
            console.log(user)
            // ...
          } else {
            // User is signed out
            router.push("./")
            // ...
          }
        })
      }, [])
    return(<>
        {children}
        </>
    )
}