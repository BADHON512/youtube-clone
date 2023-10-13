/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { OpenClose } from "../../App";



export default function Microphone() {
    const {badhon}=useContext(OpenClose)
 
  return (
    <div className='fixed h-[92vh] w-full bg-[#413f3f8a]  z-0 flex justify-center top-12 text-white'>
        <div className=' h-[60vh] w-[80vw] 800px:w-[50vw]  bg-[#212121] rounded-sm p-2 absolute -top-9 z-50 '>
            <div className="flex justify-end ">
               <div onClick={()=>badhon(2)} className="h-[30px] w-[30px] cursor-pointer bg-[#ddd3d30e] hover:bg-[#ddd3d34b]  rounded-full flex justify-center items-center">
               <RxCross1 size={20}/>
               </div>
              
            </div>
            <div className="p-2  ">
                <h1 className="text-[25px]">Listening...</h1>
              
               </div>

               <div className=" flex w-full h-[30vh] justify-center items-end">
                <div className="h-[100px] w-[100px] "> 
                <img src="/src/assets/recording.gif" className="h-full w-full rounded-full" alt="" />
                </div>
               </div>
      

        </div>
    </div>
  )
}
