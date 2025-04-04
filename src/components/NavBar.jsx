import { FaCakeCandles, FaUser } from "react-icons/fa6"
import { IoIosNotifications, IoMdArrowDropdown } from "react-icons/io"

function NavBar() {
  return (
    <div>
      <div className="flex justify-center bg-blue-900">
        <nav className=" container items-center h-[70px] flex justify-between text-white">
          <div>
            <div className="pl-2">LOGO</div>
          </div> 
          <div className="flex gap-5 items-center text-sm pr-2">
            <button className="flex items-center gap-1 bg-white text-blue-900 px-4 py-1 rounded-md">Menu <span><IoMdArrowDropdown /></span></button>
            <button className="flex justify-center items-center rounded-full bg-white text-blue-900 p-1"><IoIosNotifications /></button>
            <button className="flex justify-center items-center rounded-full bg-white text-blue-900 p-1"><FaCakeCandles /></button>
            <button className="flex justify-center items-center rounded-full bg-white text-blue-900 p-1"><FaUser /></button>
            <button className="flex items-center gap-1 text-gray-300">Da <span><IoMdArrowDropdown /></span></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
