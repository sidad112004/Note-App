import React from 'react';
import Navbar from './Componets/Navbar/Navbar';
import Bottominput from './Componets/Navbar/Bottominput';
import Homepage from './Componets/Homepage/Homepage';
import { Mycontext } from './Componets/Apicalls/ContextApi';
import { useState } from 'react';
import Resopance from './Componets/Apicalls/Resopance';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [link, setLink] = useState('');
  const [temp, setTemp] = useState(false);
  const [reverse,setreverse]=useState(false);


  return (
    <Mycontext.Provider value={{notes, setNotes, title, setTitle, description, setDescription, link, setLink,temp, setTemp,reverse,setreverse}}>
    <div >
      <Navbar/>
      <Homepage/>
      <Bottominput/>
      <Resopance/>
    </div>
    </Mycontext.Provider>
  );
}

export default App;
