import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Descr() {
  const [des, setdes] = useState('');
  const [plainText, setPlainText] = useState('');

  const handleChange = (newdes) => {
    setdes(newdes);
    setPlainText(stripHtml(newdes));
  };

  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <>
      <div className='font-bold'>
        Description
      </div>
      <div className="text-black bg-white m-3">
        <ReactQuill theme="snow" value={des} onChange={handleChange} />
      </div>
      <div>
        {plainText}
      </div>
    </>
  );
}

export default Descr;  

