import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add } from "../slices/userslice";

const Addfriend = () => {
    const [disable,setdisble]=useState(false);
    const [person,setperson]=useState("");
    const [image,setimage]=useState("");
    const dispatch=useDispatch();
    const {user}=useSelector(store=>store.user);
    const handleaddfriend=(e)=>{
        e.preventDefault();
        dispatch(add(person,image));
    }
    // }
    // if(!person||!image||person===""||image===""){
    //     setdisble(true);
    // }
  return (
    <form onSubmit={(e)=>handleaddfriend(e)} className="w-[80%] max-lg:w-[80%] min-h-[200px] mt-3 bg-blue-200 p-2">
      <div className="flex-col flex w-[80%] mx-auto p-2">
        <label className="font-mono capitalize" htmlFor="">Name</label>
        <input onChange={(e)=>setperson(e.target.value)} type="text" className="rounded-md p-1" placeholder="Name of the friend" />
      </div>
      <div className="flex-col flex w-[80%] mx-auto p-2">
        <label className="font-mono capitalize" htmlFor="">image</label>
        <input onChange={(e)=>setimage(e.target.value)} type="text" className="rounded-md p-1" placeholder="Give the image url" />
      </div>
      <button type="submit" className="border-2 text-white border-black bg-green-500 px-2 p-2 rounded-xl mt-3">Add Friend</button>
    </form>
  );
}
export default Addfriend
