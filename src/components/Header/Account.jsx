import { PiVideoFill } from "react-icons/pi";

export default function Account() {
  return (
    <div className="bg-[#050404] h-[92vh] w-[30vw] rounded-md text-white shadow-2xl fixed top-12 right-10   ">
      <div className="p-3">
      <div className="w-full flex gap-x-3">
        <div className="w-[50px]">
          <img
            src={"/src/assets/7.jpg"}
            className="h-[50px] w-[50px] rounded-full object-cover"
            alt="errro"
          />
        </div>
        <div>
            <h1 className="text-sm ">HM Naiyem</h1>
            <p className="text-sm ">@mdbadhon5858</p>
            <a href="" target="_blank" className=" text-[#3886CA] text-sm font-semibold">Manage your Google Account</a>
        </div>
      </div>
      </div>
      
      <div className=" w-full  border-[#c4c4c44b] border-b"/>
     <div className="p-3">
        <div className="space-y-3">
            <div className="flex justify-between items-center hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <div>
                <div className="flex items-center gap-x-5">
            <PiVideoFill size={25} />
            <h1>Shorts</h1>
          </div>
                </div>

                <div>
                    <h1>*</h1>
                </div>
            </div>
        </div>
     </div>

    </div>
  );
}
