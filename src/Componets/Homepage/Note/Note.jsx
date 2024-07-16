import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import './customQuillStyles.css';

function Note() {
    const [desdata, setdesdata] = useState('siddesh is herer to ');
    return (
        <div className='w-full h-44 '>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="
            w-full h-full" onClick={() => document.getElementById('my_modal_4').showModal()}>

                <div className="card bg-neutral-content text-accent-content w-full shadow-xl h-full">
                    <div className=" w-full h-full ">
                        <h2 className="  w-full h-full  flex justify-center items-center overflow-x-auto p-3 font-semibold">
                            title
                        </h2>

                    </div>
                </div>

            </button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box  max-w-full">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <div className='mt-3'>
                        <div className='font-bold'>Description</div>
                        <ReactQuill
                            className=' text-white custom-quill'
                            theme="snow"
                            value={desdata}
                            readOnly={true}
                            modules={{ toolbar: false }}

                            
                        />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Note;
