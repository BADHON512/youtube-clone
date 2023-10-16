import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideMenu from "./components/Header/SideMenu";
import { AnimatePresence } from "framer-motion";
import Microphone from "./components/Header/Microphone";
import Upload from "./components/Header/Upload";
import Notification from "./components/Header/Notification";
import Account from "./components/Header/Account";
import Body from "./components/Home/Body";

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
 <div>
 <div className="bg-[#1b1a1a] text-white">
        {/* heder component */}
        <div className="h-[8vh] w-full bg-black fixed top-0 ">
          <Header />
        </div>
        {/* heder component */}

        {/* SideMenu Start */}
  
          <AnimatePresence>{Open == 1 && <SideMenu />}</AnimatePresence>
        
        {/* SideMenu End */}
      </div>
        {/* heder component */}
  
        {Open == 2 && <Microphone />}
     
        {Open == 3 && <Upload />}
      
       
        {Open == 4 && <Notification />}
       
    
        {Open == 5 && <Account />}
        
        {/* heder component */}
 </div>

   <div className="min-h-[90vh] w-full bg-[#080813] text-white pt-[8vh]">
  <Body/>
   </div>
    </OpenClose.Provider>
  );
}

export default App;
