
import './App.css';
import Dexie from 'dexie';
function App() {

    // create an instance of dexie
  const db = new Dexie("audioDB");

  // create the database store
  db.version(1).stores({
    songs : "song"
  })
  
  

  return (
    <div className="App">

       <h1>Audio Player</h1>

       <input type="file" />



    </div>
  );
}

export default App;
