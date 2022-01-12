
import './App.css';
import Dexie from 'dexie';
import {useState} from 'react';

function App() {

    // create an instance of dexie
  const db = new Dexie("audioDB");

  // create the database store
  db.version(1).stores({
    songs : "song"
  })
  // error handling
  db.open().catch((err) => {console.log(err.stack || err)})

 // state variables
  


  // reading and decoding  the file using FileReader javascript object

  const getfile = (e) => {
    
    let reader = new FileReader();
    reader.readAsDataURL(e[0]);
    reader.onload = (e) => {
      console.log(reader.result);
    }
  }

  

  return (
    <div className="App">

       <h1>Audio Player</h1>

       <input type="file" name='file' onChange={e => getfile(e.target.files)}/>



    </div>
  );
}

export default App;
