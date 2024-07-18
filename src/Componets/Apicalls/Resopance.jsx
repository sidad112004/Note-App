import { useMycontext } from "./ContextApi";
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';

function Resopance() {
  const { reverse, setreverse, temp, setTemp, title, setTitle, description, setDescription, link, setLink, notes, setNotes } = useMycontext();
  const[added,setadded]=useState(false);
  useEffect(() => {
    
   
    if (description !== '' && title !== '') {
      
      axios.post('http://localhost:3000/notes',
        {
          title: title,
          description: description,
          link: link
        }
      )
        .then(res => {
          console.log(res.data);
          setTitle('');
          setDescription('');
          setLink('');
          if(added===false){
            setadded(true);
          }
          else{
            setadded(false);
          }
          

        })
        .catch(err => console.log(err));
    }

  }, [temp]);



  useEffect(() => {
    axios.get('http://localhost:3000/notes')
      .then(res => {
        setNotes(res.data)

        if (reverse === true) {

          const reversedNotes = [...notes];

          console.log(reversedNotes);

          reversedNotes.reverse();

          console.log(reversedNotes);

          setNotes(reversedNotes);

        }


      })
      .catch(err => console.log(err));


  }, [temp, reverse,added]);




  return (
    <div>

    </div>
  );
}

export default Resopance;
