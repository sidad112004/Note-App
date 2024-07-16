import React from 'react';
import Note from './Note';

function Allnotes() {
  return (
    <div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2 w-full gap-9 p-3 h-fit'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default Allnotes;
