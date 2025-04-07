import { useState } from "react";
import { Accounts, Footer, NavBar , Table } from "./components";
import table from './Data/TableData'

function App() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filterType, setFilterType] = useState("all"); 
  const [pageSize , setPageSize] = useState(10) ;
  const [columnVisibility, setColumnVisibility] = useState({});
  const [data , setData] = useState([]) ;
  return (
    <>
    <NavBar/>
    <Accounts setData={setData} columns={table.columns} setPageSize={setPageSize} data={table.data} setFilterType={setFilterType} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}/>
    <Table data={data} setData={setData} columns={table.columns} pageSize={pageSize} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} filterType={filterType} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}/>
    <Footer/>
    </>
  )
}

export default App
