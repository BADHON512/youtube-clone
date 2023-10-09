import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideMenu from "./components/Header/SideMenu";
import { AnimatePresence } from "framer-motion";
import Microphone from "./components/Header/Microphone";

export const OpenClose = createContext();

function App() {
  const [Open, setOpen] = useState(0);
  const badhon=(tab)=>{
    if(Open==tab){
      setOpen(0)
    }else{
      setOpen(tab)
    }
  }

  console.log(Open);
  return (
    <OpenClose.Provider value={{badhon}}>
      <div className="bg-[#0F0F0F] text-white">
        {/* heder component */}
        <div className="h-[8vh] w-full">
          <Header />
        </div>
        {/* heder component */}

        {/* SideMenu Start */}
        <div className="min-h-[100vh] w-[22vw]">
          <AnimatePresence>{Open == 1 && <SideMenu />}</AnimatePresence>
        </div>
        {/* SideMenu End */}
      </div>
        {/* heder component */}
        <div className="h-full w-full">
        {Open == 2 && <Microphone />}
        </div>
        {/* heder component */}


    </OpenClose.Provider>
  );
}

export default App;
