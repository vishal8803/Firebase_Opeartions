import React, {useEffect, useState} from 'react'
import { database } from '../firebase'

function FireStore() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const createData = async() =>{
        let res = await database.users.add({name,age});
        // let res = await database.users.doc('dkmwZbz1eXEuLyjWdr5h').set({name,age});
        console.log(res)
    }

    useEffect(async()=>{
        let uid = 'dkmwZbz1eXEuLyjWdr5h'
        
        // for particualr record
        // let data = await database.users.doc(uid).get(); // onSnapshot
        // console.log(data.data());

        // for all record
        // let data = await database.users.get();
        // data.forEach((obj)=>console.log(obj.data()));

        // for ordering the data
        // let data = await database.users.orderBy('age','desc').get();
        // data.forEach((obj)=>console.log(obj.data()));

    },[])

    const update = async() =>{
        let uid = 'dkmwZbz1eXEuLyjWdr5h'
        await database.users.doc(uid).update({
            name,age 
        })
    }

    const deletee = async()=>{
        let uid = 'SjwXSfbV92R8ToToplkg'
        let res = await database.users.doc(uid).delete();
        console.log(res);
    }

  return (
    <>
        <label htmlFor='name'>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ></input>
        <label htmlFor='age'>Age</label>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} ></input>
        <button onClick={()=>createData()} >Create</button>
        <button onClick={()=>update()} >Update</button>
        <button onClick={()=>deletee()} >Delete</button>
    </>
  )
}

export default FireStore