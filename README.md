# Audio Player using React JS and indexedDB

## Brief explanation of working of project :
 ### App.js :
 • entire logic of the code is stored here.
 
 • A database called 'audioDB' is created using Dexie and an object store 'song' is created with song property (id is provided by Dexie)
 
 • useLiveQuery hook from the dexie-react-hooks package is used to monitor changes and re-render the react component whenever the indexedDB database is updated.
   allData variable is set to the useLiveQuery hook to store the content of song object store in an array format. 

 • getfile   : When user clicks on upload button, getfile event handler is fired. This function uses Javascript Filereader object for reading and decoding the file
   and then setFile function is used to store base64 encoded string in the postFile state variable.This is the URL that represents file's data.
   
 • postSonginfo : Now when user clicks on submit button an asynchronous postSonginfo event handler is fired. The purpose of this function is to create a new data object
   for the uploaded audio file and add it to the object store of the database.
   
 • player  : maps over an array of objects (allData) to create an audio player for each object.
 
