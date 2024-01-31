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
  
  const [showaddfriend, setshowaddfriend] = useState(false);
  const [showsplit, setsplit] = useState(false);
  const user=useSelector(e=>e.user);
  const dispatch=useDispatch();
  // dispatch(reset())
  // console.log(user);

  return (
    <>
      <div className="w-screen min-h-screen gap-1 flex max-lg:flex-col-reverse justify-center  items-center ">
        <div className="flex flex-col justify-center items-center max-lg:w-[90%] w-[30%]">
          <Friendlist setsplit={setsplit} />
          {showaddfriend ? <Addfriend /> : ""}
          <button
            onClick={() => setshowaddfriend((e) => !e)}
            className="border-2 border-black bg-orange-600 p-2 ml-44 rounded-xl mt-3"
          >
            {showaddfriend ? "Hide" : "Show"} the add Friend form
          </button>
        </div>
        {showsplit ?<div className="max-lg:w-full w-[25%]  flex justify-center"> <Slipbill setsplit={setsplit}/></div> : ""}
      </div>
    </>
  );
}

export default App;
