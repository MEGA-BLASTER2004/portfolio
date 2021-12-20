import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import File from "./File";
import { IoIosArrowDown } from "react-icons/io";

function Paths() {
    return (
        <div>
            <div className="flex p-2 items-center justify-between text-lg border-b border-gray-600 mb-1">
                <h1>Explorer</h1>
                <BiCodeAlt className="w-5 h-5" />
            </div>
            <div className="flex p-[1px] items-center space-x-[2px] text-lg">
                <IoIosArrowDown className="w-5 h-5" />
                <h1 className="font-bold text-sm">Portfolio</h1>
            </div>
            <div className="flex pl-[10px] pt-1 pb-1 items-center space-x-[2px] text-lg">
                <IoIosArrowDown className="w-5 h-5" />
                <h1 className="font-bold text-sm">pages</h1>
            </div>
            <File filename="index.js" path="/" />
            <File filename="profile.js" path="/profile" />
        </div>
    );
}

export default Paths;
