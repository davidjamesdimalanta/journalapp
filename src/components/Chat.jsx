import React from "react";
import ChatEntry from "./ChatEntry";
function Chat() {
    return (
        <div 
            className="w-9/12 h-screen relative
                       flex justify-center items-center">
        <div
            className="container w-full h-full
                       flex flex-col justify-center items-center
                       gap-4 py-12">
        <h1 className="text-white text-5xl font-NotoSerifJP animate-fadeIn">
            Entries
        </h1>
        <div className="animate-fadeInLate flex flex-col justify-center items-center gap-6 overflow-scroll w-fit pt-32">
        <ChatEntry />
        </div>
        </div>
        </div>
    )
}

export default Chat