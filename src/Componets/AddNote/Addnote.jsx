import React from 'react';
import Newnote from './Newnote/Newnote';
import { useMycontext } from '../Apicalls/ContextApi.js';
function Addnote() {
   
   const {temp, setTemp}=useMycontext();
   const handle_submited_note=()=>{
    // e.preventDefault();
       if(temp===true){
        setTemp(false)
       }
       else{
        setTemp(true)
       
       }
       
    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-primary" onClick={() => document.getElementById('note').showModal()}>Add-Note</button>
            <dialog id="note" className="modal">
                <div className="modal-box w-11/12 max-w-full">
                    <h3 className="font-bold text-lg">Add Note</h3>
                    <Newnote />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn m-1 btn-primary" onClick={handle_submited_note}>Save</button>
                            <button className="btn btn-error m-1">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Addnote;
