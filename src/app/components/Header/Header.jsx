"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { PiMicrophoneFill } from "react-icons/pi";
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [Search, setSearch] = useState("");
  return (
    <div className="h-[8vh] w-full fixed  shadow-lg">
      <div className="p-3 flex gap-x-3 justify-between flex-shrink items-center h-full ">
        {/* header first part start */}
        <div className=" flex gap-x-3 h-full items-center">
          <AiOutlineMenu size={30} />
          <BsYoutube size={30} color="#FF0000" />
          <div className=" relative ">
            <h1 className="font-extrabold font-serif">YouTube</h1>

            <span className=" absolute -top-1 text-[10px] -right-3">BD</span>
          </div>
        </div>
        {/* header first part end */}

        {/* header middle part start */}
        <form className=" w-[50%] flex gap-x-4 h-full items-center ">
          <div className="w-full flex items-center h-full  ">
            <div className="relative w-full">
              <input
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                type="text"
                className="w-full h-[35px] bg-[#121212] outline-none border px-3  border-[#acabab79] 
               focus:border-blue-600 appearance-none rounded-l-full relative"
              />
              {Search && (
                <div className="absolute right-2 top-2 cursor-pointer">
                  <RxCross1 onClick={() => setSearch("")} />
                </div>
              )}
            </div>

            <div className="h-[37px] bg-[#212121]  w-16 rounded-r-full cursor-pointer">
              <div className="h-full w-full flex justify-center items-center">
                <AiOutlineSearch size={20} color="" />
              </div>
            </div>
          </div>

          <div className="h-[35px] w-[40px] bg-[#524f4f52] hover:bg-[#696767a8] cursor-pointer rounded-full flex justify-center items-center">
            <PiMicrophoneFill id="sub" size={17} />
          </div>
        </form>
        {/* header middle part end */}

        {/* header last part start */}
        <div className="flex gap-x-3 600px:gap-x-7 items-center h-full ">
          <div className="h-[40px] w-[40px] hover:bg-[#acaaaa52] ] cursor-pointer rounded-full flex justify-center items-center">
            {" "}
            <BiSolidVideoPlus size={25} />
          </div>

          <div className="h-[40px] w-[40px] hover:bg-[#acaaaa52] ] cursor-pointer rounded-full flex justify-center items-center">
            {" "}
            <IoMdNotifications size={25} />
          </div>
          <div className="h-[40px] w-[40px] hover:bg-[#acaaaa52] ] cursor-pointer rounded-full flex justify-center items-center">
            {" "}
            <IoMdNotifications size={25} />
          </div>

    
        </div>
        {/* header last part end */}
      </div>
    </div>
  );
}
