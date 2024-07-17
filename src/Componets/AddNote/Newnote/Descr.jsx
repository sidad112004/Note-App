import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMycontext } from '../../Apicalls/ContextApi';

function Descr() {
  const {description,setdescription}=useMycontext();

  return (
    <>
      <div className='font-bold'>
        Description
      </div>
      <div  className=" text-white m-3">
        <ReactQuill className=' bg-base-100 border-base-100 text-white' theme="snow" value={description} onChange={setdescription}  />
      </div>
      <div>
      



      </div>
    </>
  );
}
 

export default Descr;  

