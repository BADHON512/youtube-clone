import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { AiFillHome, AiFillLike, AiFillSetting } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { MdOutlineMenuOpen, MdPhotoLibrary, MdFeedback } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BsPersonVideo2, BsFillFlagFill } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiChatHistoryLine } from "react-icons/ri";
import { BiSolidDownload, BiLibrary, BiSolidHelpCircle } from "react-icons/bi";

export default function SideMenu() {
  const [first, setfirst] = useState();
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  return (
    <>
      <motion.div
       style={{ pathLength: scrollYProgress }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#050404] h-[92vh] w-[20vw] shadow-2xl fixed p-3 overflow-y-auto "
       ref={ref}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <AiFillHome size={25} />
            <h1>Home</h1>
          </div>

          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <PiVideoFill size={25} />
            <h1>Shorts</h1>
          </div>

          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <BsPersonVideo2 size={25} />
            <h1>Subscriptions</h1>
          </div>

          <div className=" w-full mt border-[#c4c4c44b] border-b"></div>

          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <BiLibrary size={25} />
            <h1>Library</h1>
          </div>

          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <FaHistory size={25} />
            <h1>History</h1>
          </div>

          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <MdPhotoLibrary size={25} />
            <h1>Your videos</h1>
          </div>
          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <RiChatHistoryLine size={25} />
            <h1>Watch later</h1>
          </div>
          <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
            <BiSolidDownload size={25} />
            <h1>Downloads</h1>
          </div>
          <div className={`${first ? "block" : "hidden space-y-3 mt-1"}`}>
            <div className=" w-full mt border-[#c4c4c44b] border-b"></div>

            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <MdOutlineMenuOpen size={25} />
              <h1>Next js Tutorials</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <MdOutlineMenuOpen size={25} />
              <h1>React js</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <MdOutlineMenuOpen size={25} />
              <h1>Node js Tutorials</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <MdOutlineMenuOpen size={25} />
              <h1>New Movie</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <MdOutlineMenuOpen size={25} />
              <h1>Downloads</h1>
            </div>
          </div>
          <div
            onClick={() => setfirst(!first)}
            className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer"
          >
            {first ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
            <h1>Your clips</h1>
          </div>
          <div className=" w-full mt border-[#c4c4c44b] border-b"></div>
          <div className="mt-2 space-y-2">
            <h1>Subscription</h1>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s88-c-k-c0x00ffffff-no-rj"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">BB ki vince</h1>
            </div>

            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/4.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">Learn With sumith</h1>
            </div>

            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/9.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">Anisul islalm</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/6.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">Becodemy</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/3.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">Hitesh Choudhary</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/7.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">HM Nayem</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/8.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">Dave Gray</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/2.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">Yahia Amin</h1>
            </div>
          </div>

          <div className=" w-full mt border-[#c4c4c44b] border-b"></div>
          <div className="mt-2 space-y-2">
            <h1 className="text-sm">More from YouTube</h1>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/yo.png"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">YouTube Premium</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/yo.png"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">YouTube Studio</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/yo.png"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">YouTube Music</h1>
            </div>
            <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <div className="h-[20px] w-[20px] rounded-full">
                <img
                  src="/src/assets/yo.png"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-sm">YouTube Kids</h1>
            </div>

            <div className=" w-full mt border-[#c4c4c44b] border-b"></div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <AiFillSetting size={20} />
                <h1>Setting</h1>
              </div>
              <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <BsFillFlagFill size={20} />
                <h1>Report history</h1>
              </div>
              <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <BiSolidHelpCircle size={20} />
                <h1>Help</h1>
              </div>
              <div className="flex items-center gap-x-5 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <MdFeedback size={20} />
                <h1>Send feedback</h1>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className=" w-full mt border-[#c4c4c44b] border-b"></div>
            <p className="text-[12px] font-serif mt-3">About press Copyright</p>
            <p className="text-[12px] font-serif mt-1 ">
              AContact us creators Advertise Developers
            </p>
            <p className="text-[12px] font-serif mt-4 ">
              terms Privacy Policy & Safety How YouTube works Test new Features
            </p>
            <p className="text-[12px] font-serif mt-4 text-[#927d7d88] ">
              &copy; 2023 Google LLC
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
