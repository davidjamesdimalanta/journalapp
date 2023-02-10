import React from "react";
import ChatEntry from "./ChatEntry";
function Chat() {
    return (
        <div 
            className="w-11/12 h-screen relative
                       flex justify-center items-center
                       md:justify-start
                       ">
        <div
            className="container w-screen h-screen
                       md:w-7/12 md:items-start md:pl-24
                       flex flex-col justify-center items-center
                       gap-4">
        <h1 className="text-white text-5xl font-NotoSerifJP animate-fadeIn">
            Entries
        </h1>
        <div className="animate-fadeInLate flex flex-col justify-center items-center md:justify-center md:items-start gap-2">
        <ChatEntry/>
        </div>
        </div>
        </div>
    )
}

export default Chat