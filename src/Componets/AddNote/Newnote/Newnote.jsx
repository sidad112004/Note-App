import React, { useState } from 'react';
import Descr from './Descr';

function Newnote() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  return (
    <>
      <div className='m-3'>
        <input
          type="text"
          placeholder="Enter Title"
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className=''>
        <Descr />
      </div>
      <div className='m-3'>
        <h1 className='font-bold mb-2'>Add Image/Video</h1>
        <input
          type="text"
          placeholder="Enter Image/video url"
          className="input input-bordered w-full"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
    </>
  );
}

export default Newnote;
