import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../store";
import { selectedandsplit } from "../slices/userslice";

const Slipbill = ({bill,setbill}) => {
  const [me, setme] = useState(0);
  const [paid, setpaid] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const selected = useSelector((store) => store.selected);
  const obj = user.find((e) => e.name === selected.selID);
  console.log(obj);
  const splitting = (name, paid, money) => {
    dispatch(selectedandsplit(name, paid, money));
  };

  return (
    <div className="min-w-[30%] max-lg:w-[80%] min-h-[50%] flex flex-col gap-5  p-5 bg-orange-200 rounded-md">
      <div className="font-bold capitalize font-mono tracking-tighter">
        The bill Splitter{" "}
      </div>
      <div className="flex items-center justify-between gap-2">
        <label className="font-bold" htmlFor="bill">
          💸 Bill Value
        </label>
        <input
          value={bill}
          onChange={(e) => setbill(e.target.value)}
          className="font-mono tracking-tighter text-black placeholder:font-mono rounded-lg p-1 outline-none"
          placeholder="enter..."
          type="text"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label className="font-bold" htmlFor="me">
          🤷‍♀️ Your expense
        </label>
        <input
          value={me}
          onChange={(e) => setme(e.currentTarget.value)}
          className="font-mono tracking-tighter text-black placeholder:font-mono rounded-lg p-1 outline-none"
          placeholder="enter..."
          type="text"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label className="font-bold" htmlFor="you">
          🤷 Friend expense
        </label>
        <input
          value={bill - me}
          disabled
          className="font-mono tracking-tighter text-black placeholder:font-mono rounded-lg p-1"
          placeholder="enter..."
          type="text"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label className="font-bold" htmlFor="you">
          🤑 Whos is paying?
        </label>
        <select
          defaultValue=""
          onChange={(e) => {
            if (e.target.value === "me") {
              setpaid(false);
            }
            if(e.target.value==="you"){
              setpaid(true);
            }
          }}
          className="text-black bg-orange-200 border-2 border-red-400 p-2"
          name=""
          id=""
        >
          <option disabled className="" value="">
            Choose
          </option>
          <option value="me">Me</option>
          <option value="you">{obj.name || "Random Hooman"}</option>
        </select>
      </div>
      <button
        onClick={() => splitting(obj.name, paid, bill - me)}
        className="p-2 px-3 font-bold bg-orange-500 rounded-lg flex justify-center items-center "
      >
        Split Bill
      </button>
    </div>
  );
};

export default Slipbill;
