import React from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen
        bg-gradient-to-b from-slate-900 via-indigo-800 to-indigo-800">
        <div className="absolute
                        h-screen w-screen
                        flex flex-col justify-start sm:justify-end
                        p-6 pt-8
                        ">
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
        <div className="py-2 pb-12 w-10">
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </Link>
        </div>
        </div>
        <Outlet />
        </div>
    )
}

export default App