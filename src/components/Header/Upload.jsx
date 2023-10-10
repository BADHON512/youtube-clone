import { HiOutlineStatusOnline } from "react-icons/hi";
import { PiVideoFill } from "react-icons/pi";

export default function Upload() {
  return (
    <div className='h-[12vh] w-[15vw] text-white  bg-[#202124] rounded-sm fixed top-12 right-0'>
        <div className=" p-1">
          <div className="flex items-center gap-x-3 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <PiVideoFill size={25} color="white" />
            <h1>Upload video</h1>
          </div>
          <div className="flex items-center gap-x-3 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <HiOutlineStatusOnline size={25} color="white" />
            <h1>Go live</h1>
          </div>
          </div>
    </div>
  )
}
