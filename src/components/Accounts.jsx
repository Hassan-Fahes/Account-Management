import { FaFilter } from "react-icons/fa6"
import { IoMdArrowDropdown } from "react-icons/io"
import { PiPrinter } from "react-icons/pi"

// eslint-disable-next-line react/prop-types
function Accounts({ globalFilter, setGlobalFilter , setFilterType }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" container mt-3">
          <div className="flex justify-between">
            <p className="pl-2 text-blue-900 text-lg font-bold">Accounts</p>
            <div className="flex gap-2 pr-1">
              <button className="flex font-bold border-blue-900 border-r text-sm border-t border-b py-1 border-l items-center gap-1 bg-white text-blue-900 px-3 rounded-md"><span><FaFilter /></span>filter</button>
              <button className="flex font-bold items-center bg-blue-900 text-white px-3 text-sm py-1 rounded-md">New account</button>
            </div>
          </div>
          <div className="flex pl-3 rounded-md mt-5 gap-9 h-[60px] items-center bg-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-sm">ALL</span> <input onClick={() => setFilterType("all")} className="mt-0.5" type="radio" name="" id="" />
            </div>            
            <div>
              <span className="text-sm">SUPPLIER </span> <input onClick={() => setFilterType("supplier")} className="mt-0.5" type="radio" name="" id="" />
            </div>
            <div>
              <span className="text-sm">CUSTOMER </span> <input onClick={() => setFilterType("customer")} className="mt-0.5" type="radio" name="" id="" />  
            </div>
          </div>
          <div className="flex gap-3 md:flex-row flex-col justify-between items-center mt-2">
            <div className="flex gap-2">
              <div className="flex sm:flex-row flex-col gap-2">
                <button className="flex items-center gap-1 border px-3 py-1 text-sm border-blue-500 rounded-md"><span className=" text-green-400"><PiPrinter /></span>Print</button>
                <button className="flex items-center gap-1 border px-3 py-1 text-sm border-blue-500 rounded-md">Export <span><IoMdArrowDropdown /></span></button>
              </div>
              <div className="flex sm:flex-row flex-col gap-2">
                <button className="flex items-center gap-1 border px-3 py-1 text-sm border-blue-500 rounded-md">Column visibility <span><IoMdArrowDropdown /></span></button>
                <button className="flex items-center gap-1 border px-3 py-1 text-sm border-blue-500 rounded-md">Show 10 rows <span><IoMdArrowDropdown /></span></button>
              </div>
            </div>
            <div>
              <input value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} className=" border-2 rounded-md px-3 py-1" type="text" placeholder="Search..." name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accounts
