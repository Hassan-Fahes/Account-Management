import { useContext, useState } from "react";
import { Accounts, Footer, NavBar , Table } from "../components";
import table from '../Data/TableData'
import { AuthContext } from "../context/AuthContext";

function Admin() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filterType, setFilterType] = useState("all"); 
  const [pageSize , setPageSize] = useState(10) ;
  const [columnVisibility, setColumnVisibility] = useState({});
  const [data , setData] = useState([]) ;
  const {user , isLoading} = useContext(AuthContext) ;
  console.log(user) ;
  console.log(isLoading) ;
  return (
    <div>
        <NavBar/>
        <Accounts setData={setData} columns={table.columns} setPageSize={setPageSize} data={table.data} setFilterType={setFilterType} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}/>
        <Table data={data} setData={setData} columns={table.columns} pageSize={pageSize} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} filterType={filterType} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}/>
        <Footer/>
    </div>
  )
}

export default Admin
