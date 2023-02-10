import React, { useState } from "react";
import axios from "axios";
function Landing() {
    const [entry , setEntry] = useState('');
    console.log(entry);
    const sendDataToAPI = () => {
    axios.post('https://63e3f86965ae4931771badb6.mockapi.io/Entries', {
        entry
    })
    }
    return (
        <div className="relative
                        flex justify-center items-center pl-14">
        <div className="container w-screen h-10/12 
                        flex flex-col justify-center items-center pr-12 sm:pr-16">
        
        <div className="flex flex-col justify-center items-center
                        lg:flex-row 
                        pb-10">
        <span className="text-white text-5xl sm:text-7xl
                         font-NotoSerifJP font-extrabold">
            Get It Off Your
        </span>
        <span className="text-slate-300 text-5xl sm:text-7xl
                         font-NotoSerifJP font-extrabold
                         pl-3
                         animate-fadeIn">
            Chest.
        </span>
        </div>
        <>
        <textarea 
            name="entry" 
            id="" 
            rows="5"
            className="w-7/12 h-48 
                       sm:h-8 sm:border-b sm:border-b-slate-400 
                       bg-inherit 
                       font-NotoSerifJP text-slate-400
                       animate-fadeInLate
                       outline-none" 
            placeholder="What's On Your Mind?"
            onChange={(e) => setEntry(e.target.value)}>
        </textarea>
        </>
        <div 
            className="pt-4">
        <button
            className="w-16 h-8
                       hover:border border-slate-400 rounded-md
                       text-slate-400 font-NotoSerifJP
                       animate-fadeInLate
                       outline-none"
            type="submit"
            onClick={sendDataToAPI}>
            Submit
        </button>
        </div>
        </div>
        </div>
    )
}

export default Landing