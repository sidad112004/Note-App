import React from 'react';
import { useMycontext } from '../Apicalls/ContextApi';

function Navbar() {
    const { reverse, setreverse } = useMycontext();

    const handlereverse = () => {
        // e.preventDefault();
        if (reverse === false) {
            setreverse(true);
            // console.log(reverse)
        }
        else{

            setreverse(false);
            // console.log(reverse)

        }
       


        // console.log(reversedNotes);
    };
    return (
        <div>
            <div className=" navbar bg-base-100  top-0 right-0 left-0 z-10 flex justify-between items-center px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Note-App</a>
                </div>
                <div className="flex-none flex gap-2">
                    
                    <button className=' size-8' onClick={handlereverse}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVR4nO2Z2U7bQABF/RlOpewLaVhKf6V9qUqXR/otEIUoT52BVJCFQMxWSktR+x1VnxgjL4mTQD+gSacaN0YhJLHHNl4qX+m+3yPLnuQMwwQJ4s1kj+TS0sV1nwVIegTQC8ZPyRwr5eVvN5g0BHkcAugPC9E7xg/JHCrlJxc3WKsK4BeINCdvLX29xqO9BdAgwOUq49Xxi+c9PN47AF6FSO2LpfnPPbwwofcA1KIBCy7fMl5IuikXc2ddPD+lkwE8ApFsysXHHzs4d9qd2ukAQwh49caV8fGGvJE9UTABmNXZADx5J/qOQ8Tq8sbcsYKzJx3d6gLAIQTgXzs2PnPYxnNHiqEaAoAOQcTqYiF90MIEwGgNA8AhxCb/6kHGR6piIdVs4TTXpioVAHwgiEhVyif3ZUwAaEsNAP9BhCC/Ys/4ipRPNGSc3GuZqikAaBNEeEdYj+9KmACYrWkAOIQA6KW58dvCWqwuYgJgpZYAoHrY/WYB/5waIFoVBrGahK3WOgBPIGQzT+BHtCpiq7U8HqjvwntqgCBBgvg8uVPl5/L3X/ipxdrxFWIBgtQAi+e9geZ2rNSOc4AFSKIGSHHtNaJFRh2PmdpyEm+iZ9QAKsRBa52okXHXQ1PXfgtpSXFKfuFL957vMVqLJ/AKY0cSnJInimSS99Gr6+O1JPakQu5TZ6r/ofdCLvytTDSkgp4HovNCvHPjaX2QYS8EHRz/X3ghWj/kyfFa4rtiUc8T6Y6HLrnRW4iaWDTnhVwUu+OJ1oQSnRfygFofT3RH2DLkhbx4QzMKMdMLeXm8lkhFKE/0Qn64pdQS3hbKd7yQn8ZrCX+4KkUqQp+FSPTdTX0Qxnj+Av1XZydXPgYpAAAAAElFTkSuQmCC" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
