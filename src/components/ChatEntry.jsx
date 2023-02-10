import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ChatEntry() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
    axios.get('https://63e3f86965ae4931771badb6.mockapi.io/Entries')
    .then((getData) => {
        setApiData(getData.data);
    })
    })

    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id)
    }
    return (
        <>
        {apiData.map((data) => {
            return (
            <div 
                className="flex flex-row justify-between items-center
                           w-7/12 h-auto p-2 border border-t-0 border-y-0 border-b-slate-400
                           bg-inherit font-NotoSerifJP text-slate-400">
                {data.entry}
                <div className=" pl-4">
                <Link to={"/Update"}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="opacity-50 w-4 h-4 hover:scale-110 hover:opacity-100"
                    onClick={() => setID(data.id)}>
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                </Link>
                </div>
            </div>
            )
        })}
        
        </>
        
    )
}

export default ChatEntry