import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Update() {
const [entry , setEntry] = useState('');
const [id, setID] = useState(null);

const updateAPIData = () => {
    axios.put(`https://63e3f86965ae4931771badb6.mockapi.io/Entries/${id}`, {
    entry,
})
}

useEffect (() => {
    setEntry(localStorage.getItem('entry'));
    setID(localStorage.getItem('id'));
}, [])
    return (
        <div className="relative
                        flex justify-center items-center">
        <div className="container w-screen h-10/12 
                        flex flex-col justify-center items-center pr-12 sm:pr-16">
        
        <div className="flex flex-row justify-center items-center
                        pb-10">
        <span className="text-white text-3xl sm:text-3xl
                         font-NotoSerifJP font-extrabold">
            Update
        </span>
        <span className="text-slate-300 text-3xl sm:text-3xl
                         font-NotoSerifJP font-extrabold
                         pl-3
                         animate-fadeIn">
            Entry
        </span>
        </div>
        <>
        <textarea 
            name="entry" 
            rows="5"
            className="w-7/12 h-48 
                       sm:h-8 sm:border-b sm:border-b-slate-400 
                       bg-inherit 
                       font-NotoSerifJP text-slate-400
                       animate-fadeInLate
                       outline-none" 
            placeholder={entry}
            onChange={(e) => setEntry(e.target.value)}>
        </textarea>
        </>
        <div 
            className="pt-4">
        <Link to={"/Chat"}>
        <button
            className="w-16 h-8
                       hover:border border-slate-400 rounded-md
                       text-slate-400 font-NotoSerifJP
                       animate-fadeInLate
                       outline-none"
            type="submit"
            onClick={updateAPIData}
            >
            Submit
        </button>
        </Link>
        </div>
        </div>
        </div>
    )
}

export default Update