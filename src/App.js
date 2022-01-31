
import './App.css';
import Dexie from 'dexie';
import {useState} from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

// create an instance of dexie
  const db = new Dexie("audioDB");

  // create the database store
  db.version(1).stores({
    songs : "++id,song"         // Primary key and indexed props
  })
  

function App() {
 
  // state variables
    const  [postFile, setFile] = useState("");

    
    //using useLiverQuery hook to watch for changes in our IndexeddDB database
    //and re-render component whenever the database is updated.
   const allData = useLiveQuery(() => db.songs.toArray(), []);
   if (!allData) return null;

   

  // reading and decoding  the file using FileReader javascript object

  const getfile = (e) => {
    
    let reader = new FileReader();
    reader.readAsDataURL(e[0]);
    reader.onload = (e) => {
    setFile(reader.result);
    
     }
  }

    //this function is triggered when Post Song button is clicked

  async function postSonginfo () {
    
        //storing result in a data object 
     if(postFile!== "") {
       let data = {
         song : postFile
       } 
      //data object is now added to dexie database
     await db.songs.add(data)
      
     } 

   }
  
  

   //creating audio players
   const player = allData.map(({id,song}) =>(

    <div key={id} className="player">
      <audio src={song} controls/>
    </div>

   ))




  return (
    <div className="App">

            {/* title */}
       <h1 className='title'>Audio Player</h1>
        <h5 className='sub-title'>Upload your audio files </h5>
       {/* input */}
       <div className="file-input">
         <input  type="file" id='file' className='file' onChange={e => getfile(e.target.files)}/>
        <label htmlFor="file">Upload</label>
       </div>
      
        <button onClick={postSonginfo} className='post-song' > Submit </button> 
    
      {
        allData.length > 0 && 
        <div className="players">
          {player}
        </div>
      }
      
      
        </div>
  );
}

export default App;
