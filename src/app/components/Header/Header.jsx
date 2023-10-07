import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { BsYoutube } from "react-icons/bs"
import { PiMicrophoneFill } from "react-icons/pi"
import { BiSolidVideoPlus } from "react-icons/bi"
import { IoMdNotifications } from "react-icons/io"


export default function Header() {
    return (
        <div className='h-[8vh] w-full fixed  shadow-lg'>
            <div className='p-3 flex gap-x-3 justify-between flex-shrink items-center h-full '>
                {/* header first part start */}
                <div className=' flex gap-x-3 h-full items-center'>
                    <AiOutlineMenu size={30} />
                    <BsYoutube size={30} color='red' />
                    <div className=' relative '>
                        <h1 className='font-extrabold font-serif'>YouTube</h1>

                        <span className=' absolute -top-2 text-[10px] -right-4'>BD</span>
                    </div>
                </div>
                {/* header first part end */}

                {/* header middle part start */}
                <div className=' w-[50%] flex gap-x-4 h-full items-center'>
                    <div className='w-full relative '>
                        <input type="text" className='w-full h-[35px] bg-[#121212] outline-none border
                         border-gray-300 focus:border-blue-600 appearance-none rounded-full' />
                         <div className='h-full bg-[#212121] absolute top-0 right-0 w-16 rounded-r-full cursor-pointer'>
                            <div className='h-full w-full flex justify-center items-center'>
                            <AiOutlineSearch size={20} color=''/>
                            </div>
                         </div>
                    </div>

                    <div className='h-[35px] w-[40px] bg-[#d3cfcf88] rounded-full flex justify-center items-center'> 
                        <PiMicrophoneFill size={20}/>
                    </div>
                </div>
                {/* header middle part end */}



                {/* header last part start */}
                <div className='flex gap-x-3 600px:gap-x-7 items-center h-full'>
                    <BiSolidVideoPlus size={30}/>
                    <IoMdNotifications size={30}/>
                    <IoMdNotifications size={30}/>
                   
                </div>
                {/* header last part end */}




            </div>
        </div>
    )
}
