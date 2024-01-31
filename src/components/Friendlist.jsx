import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../store";
import Addfriend from "./Addfriend";
import { change, openclose } from "../slices/selectslice";
import { deletee } from "../slices/userslice";
import { MdOutlineClose } from "react-icons/md";

const Friendlist = ({ setsplit }) => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const { user } = useSelector((store) => store.user);
  const selected = useSelector((store) => store.selected);
  // console.log(selected);
  // console.log(user);

  return (
    <>
      <div className="w-[80%] max-md:w-[100%] transition-all duration-100 bg-slate-300 border-2 border-black ">
        {user.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full min-h-16  gap-3 flex justify-between items-center p-2 "
            >
              <div className="w-12 h-12  rounded-full">
                {e.imageURL ? (
                  <img
                    src={e.imageURL}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-col justify-center  w-[70%] ">
                {e.name ? (
                  <div className="name font-semibold">{e.name}</div>
                ) : (
                  <div className="name font-semibold">Random Person</div>
                )}
                {e.paid === true ? (
                  <div className="mt-[-5px] text-red-500">
                    You owe {e.name} ${e.money}
                  </div>
                ) : e.paid === false ? (
                  <div className="mt-[-5px] text-green-500">
                    {e.name} owe you ${e.money}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-center gap-1 ">
                <MdOutlineClose />
                <button
                  className="p-2 px-3 font-bold bg-orange-500 rounded-lg flex justify-center items-center "
                  onClick={() => {
                    setsplit((e) => !e);
                    dispatch(change(e.name));
                    setopen((e) => !e);
                  }}
                >
                  {open ? "close" : "Select"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Friendlist;
//setsplit={setsplit}
