import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Descr() {
  const [des, setdes] = useState('');

  return (
    <>
      <div className='font-bold'>
        Description
      </div>
      <div  className=" text-white m-3">
        <ReactQuill className=' bg-base-100 border-base-100 text-white' theme="snow" value={des} onChange={setdes}  />
      </div>
      <div>
      



      </div>
    </>
  );
}
 

export default Descr;  

