import { useMycontext } from "./ContextApi";
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';

function Resopance() {
    const { temp , setTemp,title, setTitle, description, setDescription, link, setLink, notes, setNotes} = useMycontext();

    useEffect(() => {
        if(description !== '' && title !== '' && link !== ''){
        axios.post('http://localhost:3000/notes',
          {title:title,
          description:description,
          link:link}
         )
            .then(res => {
                console.log(res.data);
                setTitle('');
                setDescription('');
                setLink('');
                
            })
            .catch(err => console.log(err));
          }
        
    }, [temp]);
    
    
    
    useEffect(() => {
         axios.get('http://localhost:3000/notes')
            .then(res => setNotes(res.data))
            .catch(err => console.log(err));      
    }, [temp,notes]);

 


  return (
    <div>
      
    </div>
  );
}

export default Resopance;
