import React, {useState} from 'react'
import { storage } from '../firebase'

function Storage() {
    const [file, setFile] = useState('');

    const upload = ()=>{
        const uploadTask = storage.ref(`/data/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);

        function fn1(snapshot){
            let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(`File uplading... ${progress}% done`)
        }
        
        function fn2(error){
            console.log(error)
        }

        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((URL)=>{
                console.log(URL)
            })
        }


    }

  return (
    <div>
        <label htmlFor='File'>File: </label>
        <input type="file" accept='image/*' onChange={(e)=>setFile(e.target.files[0])} ></input>
        <button onClick={()=>upload()} >Upload</button>
    </div>
  )
}

export default Storage