import {AiFillSetting} from "react-icons/ai"
export default function Notification() {
  return (
    <div className="min-h-[80vh] w-[35vw] text-white  bg-[#202124] rounded-sm fixed top-12 right-10">
      <div className="p-2 flex w-full justify-between">
        <h1>Notifications</h1>
        <AiFillSetting size={20}/>
      </div>
      <div className="border-t w-full border-[#e9e5e567]"/>

      <div className="p-3">
          <div className="space-y-4">
         <Notifications pro="/src/assets/2.jpg" src="" bg="/src/assets/2.jpg"/>
         <Notifications pro="/src/assets/3.jpg" src="" bg="/src/assets/7.jpg"/>
         <Notifications pro="/src/assets/4.jpg" src="" bg="/src/assets/4.jpg"/>
         <Notifications pro="/src/assets/5.jpg" src="" bg="/src/assets/6.jpg"/>
         <Notifications pro="/src/assets/6.jpg" src="" bg="/src/assets/3.jpg"/>
         <Notifications pro="/src/assets/7.jpg" src="" bg="/src/assets/5.jpg"/>
     
          </div>
      </div>
    </div>
  );
}



 function Notifications({pro,bg}) {
  return (
    <div className="w-full flex gap-x-3">
                <div className="w-[50px]">
                    <img src={pro}  className="h-[50px] w-[50px] rounded-full" alt="errro" />
                </div>
                <div className="w-[200px]">
                    <h1 className="text-[11px]">Lorem ipsum dolor sit, amet  Odit amet repudiandae facere est,  </h1>
                    <h1 className="text-[10px] text-[#d1c6c6a4]">1 hour ago</h1>
                </div>

                <div className="w-[80px]">
                    <img src={bg}  className="h-[50px] w-[80px] rounded-sm object-cover" alt="errro" />
                </div>
            </div>
  )
}

