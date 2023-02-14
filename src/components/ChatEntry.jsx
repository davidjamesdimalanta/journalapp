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
    }, [])

    const setData = (id, entry) => {
        localStorage.setItem('id', id)
        localStorage.setItem('entry', entry)
    }
    const getData = () => {
        axios.get(`https://63e3f86965ae4931771badb6.mockapi.io/Entries`)
            .then((getData) => {
                setApiData(getData.data);
            })}

    const onDelete = (id) => {
        axios.delete(`https://63e3f86965ae4931771badb6.mockapi.io/Entries/${id}`)
            .then(() => {
                getData();
            })}

    return (
        <>
        {apiData.map((data) => {
            return (
            <div 
                className="flex flex-row justify-between items-center
                           w-11/12 h-auto p-2 border border-t-0 border-y-0 border-b-slate-400
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
                    onClick={() => setData(data.id, data.entry)}>
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                </Link>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="opacity-50 w-4 h-4 hover:scale-110 hover:opacity-100"
                    onClick={() => onDelete(data.id)}>
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </div>
            </div>
            )
        })}
        
        </>
        
    )
}

export default ChatEntry