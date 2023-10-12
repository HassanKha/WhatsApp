import '@/styles/globals.css'
import {useAuthState} from "react-firebase-hooks/auth"
import Login from './../components/Login';
import Loading from './../components/Loading';
import {useEffect} from "react"
import {db, auth} from "../firebase"
import firebase from 'firebase/compat/app';

export default function App({ Component, pageProps }) {

  const [user , loading] = useAuthState(auth)

  useEffect(()=>{
    
if(user){
  console.log(user)
  db.collection('users').doc(user.uid).set({
    email: user.email,
    lastseen: firebase.firestore.FieldValue.serverTimestamp(),
    photoURL : user.photoURL,
  }, {merge: true} )
}
  }, [user])
  if(loading) return <Loading/>
  if(!user) return <Login/>

  return <Component {...pageProps} />
}
