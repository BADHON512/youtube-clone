import React, { useState } from 'react'

export default function Genres() {
const [Color, setColor] = useState(0)
  return (
  <div className='fixed '>
      <div className="h-[8vh] bg-[#000000] w-full  flex justify-center items-center gap-x-2"> 

    <div onClick={()=>setColor(1)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==1?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d]  hover:bg-[#e0d6d665] transition  duration-400 ease-in-out"} flex justify-center items-center text-white  cursor-pointer px-2`}>
     <h1 className="text-sm">All</h1>
     </div>

     <div onClick={()=>setColor(2)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==2?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Music</h1>
     </div>

     <div onClick={()=>setColor(3)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==3?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Emiway Bantai</h1>
     </div>

     <div onClick={()=>setColor(4)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==4?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">JavaScript</h1>
     </div>

     <div onClick={()=>setColor(5)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==5?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Live</h1>
     </div>

     <div onClick={()=>setColor(6)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==6?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Beats</h1>
     </div>

     <div onClick={()=>setColor(7)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==7?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Badhon</h1>
     </div>

     <div onClick={()=>setColor(8)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==8?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Movie</h1>
     </div>

     <div onClick={()=>setColor(9)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==9?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Mixes</h1>
     </div>

     <div onClick={()=>setColor(10)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==10?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Cricket</h1>
     </div>

     <div onClick={()=>setColor(11)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==11?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Recently uploaded</h1>
     </div>

    

     <div onClick={()=>setColor(13)} className={`h-[4vh] min-w-[5vw] rounded-md ${Color==13?"bg-[#fff5f5d7]  text-black ":"bg-[#e0d6d62d] hover:bg-[#e0d6d665] transition  duration-400 ease-in-out "} flex justify-center items-center text-white  cursor-pointer px-2 `}>
     <h1 className="text-sm">Raja king</h1>
     </div> 
   
   </div>
  </div>
  )
}
