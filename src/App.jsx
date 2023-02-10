import React from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen">
        <div className="absolute
                        h-screen w-screen
                        flex flex-col justify-end
                        p-6 pt-8
                        bg-gradient-to-b from-slate-900 via-indigo-800 to-indigo-800">
        <div className="py-2 w-10">
        <Link to={"/Chat"}>
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="white" 
            class="w-7 h-7 animate-fadeInLate hover:scale-110 transition ease-in-out">
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
        </Link>
        </div>
        <div className="py-2 w-10">
        <Link to={"/"}>
        <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="white" 
                class="w-7 h-7 animate-fadeInLate hover:scale-110 transition ease-in-out">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        </Link>
        </div>
        <div className="py-2 w-10">
        <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="white" 
                class="w-7 h-7 animate-fadeInLate hover:scale-110 transition ease-in-out">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
        </div>
        </div>
        <Outlet />
        </div>
    )
}

export default App