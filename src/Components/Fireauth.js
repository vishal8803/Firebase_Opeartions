import React,{useEffect, useState} from 'react'
import { auth } from '../firebase'

function Fireauth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const signup = async()=>{
        let res = await auth.createUserWithEmailAndPassword(email,password);
        console.log(res);
    }

    const signout = async()=>{
        await auth.signOut();
    }

    const signin = async()=>{
        await auth.signInWithEmailAndPassword(email,password);
    }

    useEffect(()=>{
        let unsub = auth.onAuthStateChanged((user)=>setUser(user));
        return ()=>{
            unsub();
        }
    },[])

  return (
      <>
      {user==null?
    <div>
        <label htmlFor='email'>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        
        <label htmlFor='password'>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={()=>signin()}>Sign In</button>


    </div>:<div>{user.uid}
    <button onClick={()=>signout()}>Log Out</button>
    </div>
}
    </>
  )
}

export default Fireauth