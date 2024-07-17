import React from 'react';
import Navbar from './Componets/Navbar/Navbar';
import Bottominput from './Componets/Navbar/Bottominput';
import Homepage from './Componets/Homepage/Homepage';
import { Mycontext } from './Componets/Apicalls/ContextApi';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  return (
    <Mycontext.Provider value={{notes, setNotes, title, setTitle, description, setDescription, link, setLink}}>
    <div >
      <Navbar/>
      <Homepage/>
      <Bottominput/>
    </div>
    </Mycontext.Provider>
  );
}

export default App;
