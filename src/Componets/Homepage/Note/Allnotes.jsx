import React from 'react';
import Note from './Note';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useMycontext } from '../../Apicalls/ContextApi';

function Allnotes() {
  const { notes, setNotes } = useMycontext();
  useEffect(() => {
      axios.get('http://localhost:3000/notes')
          .then(res => setNotes(res.data))
          .catch(err => console.log(err));
  }, []);

  return (
      <div>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-9 p-3 h-fit'>
              {notes.map(note => (
                  <Note
                      key={note._id}
                      id={note._id}
                      title={note.title}
                      description={note.description}
                      link={note.link}
                  />
              ))}
          </div>
      </div>
  );
}

export default Allnotes;