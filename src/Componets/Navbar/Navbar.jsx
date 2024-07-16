import React from 'react';

function Navbar() {
    return (
        <div>
            <div className=" navbar bg-base-100  top-0 right-0 left-0 z-10 flex justify-between items-center px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Note-App</a>
                </div>
                <div className="flex-none flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md">search</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
