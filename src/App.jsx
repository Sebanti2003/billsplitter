import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Friendlist from "./components/Friendlist";
import Addfriend from "./components/Addfriend";
import Slipbill from "./components/Slipbill";
import { useDispatch, useSelector } from "react-redux";
import { add, reset } from "./slices/userslice";
function App() {
  const [bill, setbill] = useState(0);
  const [showaddfriend, setshowaddfriend] = useState(false);
  const [showsplit, setsplit] = useState(false);
  const user=useSelector(e=>e.user);
  const dispatch=useDispatch();
  // dispatch(reset())
  // console.log(user);

  return (
    <div className="bg-orange-100">
    <div className="flex flex-col justify-center items-center gap-5">
    <div className="font-bold text-center text-3xl font-mono mt-24  text-orange-700">Bill-Splitter</div>
    <div className="w-[60%] mx-auto text-center text-slate-500"><span className="font-semibold italic font-mono mt-36">Use it for trial image: </span>https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</div>
      <div className="w-screen min-h-screen gap-1 flex max-lg:flex-col-reverse justify-center lg:items-start  items-center  ">
        <div className="flex flex-col justify-center items-center max-lg:w-[90%] w-[30%]">
          <Friendlist bill={bill} setsplit={setsplit} />
          {showaddfriend ? <Addfriend /> : ""}
          <button
            onClick={() => setshowaddfriend((e) => !e)}
            className="border-2 border-black bg-orange-600 p-2 ml-44 rounded-xl mt-3"
          >
            {showaddfriend ? "Hide" : "Show"} the add Friend form
          </button>
        </div>
        {showsplit ?<div className="max-lg:w-full w-[25%]  flex justify-center"> <Slipbill bill={bill} setbill={setbill} setsplit={setsplit}/></div> : ""}
      </div>
    </div>
    
    </div>
  );
}

export default App;
