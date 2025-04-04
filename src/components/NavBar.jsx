import { FaCakeCandles, FaUser } from "react-icons/fa6"
import { IoIosNotifications, IoMdArrowDropdown } from "react-icons/io"
import logo from '../assets/logo.png' ;
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [open , setOpen] = useState(false) ;
  return (
    <div>
      <div className="flex justify-center relative bg-blue-900">
        <nav className=" container items-center h-[70px] flex justify-between text-white">
          <div>
            <div className="pl-2 w-20"><img src={logo} alt="" /></div>
          </div> 
          <div>
              <button onClick={() => setOpen(!open)} className="sm:hidden mr-4 btn bg-blue-900 border-none text-white shadow-none"><IoMenu className="text-lg"/></button>
          </div>
          <div className="hidden sm:flex gap-5 items-center text-sm pr-2">
            <button className="flex items-center gap-1 bg-white text-blue-900 px-4 py-1 rounded-md">Menu <span><IoMdArrowDropdown /></span></button>
            <button className="flex justify-center items-center rounded-full bg-white text-blue-900 p-1"><IoIosNotifications /></button>
            <button className="flex justify-center items-center rounded-full bg-white text-blue-900 p-1"><FaCakeCandles /></button>
            <button className="flex justify-center items-center rounded-full bg-white text-blue-900 p-1"><FaUser /></button>
            <button className="flex items-center gap-1 text-gray-300">Da <span><IoMdArrowDropdown /></span></button>
          </div>
        </nav>
        
        <div className={`${open?"flex" : "hidden"} sm:hidden flex-col absolute left-0 top-[70px] p-4 w-[100%] bg-blue-400 z-50 gap-5 text-sm pr-2`}>
            <button className="flex w-fit items-center gap-1 bg-white text-blue-900 px-4 py-1 rounded-md">Menu <span><IoMdArrowDropdown /></span></button>
            <button className="flex w-fit justify-center items-center rounded-full bg-white text-blue-900 p-1"><IoIosNotifications /></button>
            <button className="flex w-fit justify-center items-center rounded-full bg-white text-blue-900 p-1"><FaCakeCandles /></button>
            <button className="flex w-fit justify-center items-center rounded-full bg-white text-blue-900 p-1"><FaUser /></button>
            <button className="flex w-fit items-center gap-1 text-gray-300">Da <span><IoMdArrowDropdown /></span></button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
