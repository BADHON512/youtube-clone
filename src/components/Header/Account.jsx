import {
  MdAccountBox,
  MdOutlineSwitchAccount,
  MdOutlineVideoSettings,
  MdOutlineManageAccounts,
  MdOutlineLanguage,
  MdSecurity,
} from "react-icons/md";
import { AiOutlineRight, AiOutlineDollarCircle } from "react-icons/ai";
import { PiSignIn } from "react-icons/pi";
import { CgDarkMode } from "react-icons/cg";
import { FaRegKeyboard } from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { FiHelpCircle } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";

export default function Account() {
  return (
    <div className="bg-[#282828] h-[92vh] w-[50vw] 800px:w-[27vw] rounded-md text-white shadow-2xl fixed top-12 right-2 800px:right-10 overflow-y-scroll  pb-1 ">
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
            <a
              href=""
              target="_blank"
              className=" text-[#3886CA] text-sm font-semibold"
            >
              Manage your Google Account
            </a>
          </div>
        </div>
      </div>

      <div className=" w-full  border-[#c4c4c44b] border-b" />
      <div className="mt-3">
        <div className=" ">
          <SettingsItems
            icons={<MdAccountBox size={25} color="#D5D5D5" />}
            text={"Your channel"}
          />
          <SettingsItems
            icons={<MdOutlineVideoSettings size={25} color="#D5D5D5" />}
            text={"Youtube Studio"}
          />
          <SettingsItems
            icons={<MdOutlineSwitchAccount size={25} color="#D5D5D5" />}
            text={"Switch Account"}
          />
          <SettingsItems
            icons={<PiSignIn size={25} color="#D5D5D5" />}
            text={"Sign out"}
            side={<AiOutlineRight size={17} color="#D5D5D5" />}
          />
          <div className=" w-full  border-[#c4c4c44b] border-b my-2" />
          <SettingsItems
            icons={<AiOutlineDollarCircle size={25} color="#D5D5D5" />}
            text={"Purchases and memberships"}
          />{" "}
          <SettingsItems
            icons={<MdOutlineManageAccounts size={25} color="#D5D5D5" />}
            text={"Your data in YouTube"}
          />{" "}
          <div className=" w-full  border-[#c4c4c44b] border-b my-2" />
          <SettingsItems
            icons={<CgDarkMode size={25} color="#D5D5D5" />}
            text={"Appearance: Device theme "}
            side={<AiOutlineRight size={17} color="#D5D5D5" />}
          />{" "}
          <SettingsItems
            icons={<HiLanguage size={25} color="#D5D5D5" />}
            text={"Language: English"}
            side={<AiOutlineRight size={17} color="#D5D5D5" />}
          />{" "}
          <SettingsItems
            icons={<MdSecurity size={25} color="#D5D5D5" />}
            text={"Restricted Mode: off"}
            side={<AiOutlineRight size={17} color="#D5D5D5" />}
          />{" "}
          <SettingsItems
            icons={<MdOutlineLanguage size={25} color="#D5D5D5" />}
            text={"Location:Bangladesh"}
            side={<AiOutlineRight size={17} color="#D5D5D5" />}
          />{" "}
          <SettingsItems
            icons={<FaRegKeyboard size={25} color="#D5D5D5" />}
            text={"Keyboard shortcuts"}
          />
          <div className=" w-full  border-[#c4c4c44b] border-b my-2" />
          <SettingsItems
            icons={<LuSettings size={25} color="#D5D5D5" />}
            text={"Settings"}
          />
          <div className=" w-full  border-[#c4c4c44b] border-b my-2" />
          <SettingsItems
            icons={<FiHelpCircle size={25} color="#D5D5D5" />}
            text={"Help"}
          />{" "}
          <SettingsItems
            icons={<RiFeedbackLine size={25} color="#D5D5D5" />}
            text={"Send feedback"}
          />
        </div>
      </div>
    </div>
  );
}

function SettingsItems({ icons, text, side }) {
  return (
    <div className="flex justify-between items-center hover:bg-[#92898969] px-3 py-2 cursor-pointer">
      <div>
        <div className="flex items-center gap-x-5">
          {icons}
          <h1 className="text-sm">{text}</h1>
        </div>
      </div>

      <div>
        <h1>{side}</h1>
      </div>
    </div>
  );
}
