/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { OpenClose } from "../../App";



export default function Microphone() {
    const {badhon}=useContext(OpenClose)
 
  return (
    <div className='fixed h-[92vh] w-full bg-[#413f3f8a]  z-0 flex justify-center top-12 text-white'>
        <div className=' h-[55vh] w-[45vw] bg-[gray] rounded-sm p-2 absolute -top-9 z-50 '>
            <div className="flex justify-end ">
               <div onClick={()=>badhon(2)} className="h-[35px] w-[35px] cursor-pointer bg-gray-500 rounded-full flex justify-center items-center">
               <RxCross1 size={20}/>
               </div>
            </div>
      

        </div>
    </div>
  )
}
