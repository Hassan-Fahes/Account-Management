import { useState } from "react";
import { Accounts, NavBar , Table } from "./components";
import table from './Data/TableData'

function App() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filterType, setFilterType] = useState("all"); 
  return (
    <>
    <NavBar/>
    <Accounts setFilterType={setFilterType} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter}/>
    <Table data={table.data} columns={table.columns} pageSize={5} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} filterType={filterType}/>
    </>
  )
}

export default App
