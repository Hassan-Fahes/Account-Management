import { useState } from "react";
import { Accounts, NavBar , Table } from "./components";
import table from './Data/TableData'

function App() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filterType, setFilterType] = useState("all"); 
  const [pageSize , setPageSize] = useState(10) ;
  const [columnVisibility, setColumnVisibility] = useState({});
  return (
    <>
    <NavBar/>
    <Accounts columns={table.columns} setPageSize={setPageSize} data={table.data} setFilterType={setFilterType} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}/>
    <Table data={table.data} columns={table.columns} pageSize={pageSize} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} filterType={filterType} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}/>
    </>
  )
}

export default App
