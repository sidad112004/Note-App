import { useMycontext } from "./ContextApi.js";
import { useState, useEffect } from "react";


const { title, setTitle, description, setDescription, link, setLink, notes, setNotes} = useMycontext();

useEffect(() => {
     axios.get('http://localhost:3000/notes')
        .then(res => setNotes(res.data))
        .catch(err => console.log(err));
        console.log("asdfsdf")
}, []);