import React from "react";
import {ImSpinner9} from "react-icons/im";

function Loading() {
    return <div className="grow text-lime-500 text-3xl flex items-center justify-center  ">
        
        <ImSpinner9 className="animate-spin text-8xl"/>
        
        </div>;
}

export default Loading;