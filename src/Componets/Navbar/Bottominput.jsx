import React from 'react';
import Addnote from '../AddNote/Addnote';

function BottomInput() {
    return (
        <div className="fixed bottom-0 right-0 w-auto p-4 z-10 flex justify-end items-center m-8">
           <Addnote/>
        </div>
    );
}

export default BottomInput;
