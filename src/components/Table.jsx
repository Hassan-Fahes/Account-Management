import { useEffect, useMemo, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";


const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

// eslint-disable-next-line react/prop-types
function Table({ data, columns, pageSize, globalFilter, setGlobalFilter, filterType , columnVisibility, setColumnVisibility}) {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize });
  // const [columnVisibility, setColumnVisibility] = useState({});

  useEffect(() => {
    table.setPageSize(pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  const filteredData = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    return data.filter((row) => {
      const codeString = row.code?.toString() || "";
      if (filterType === "supplier") return codeString.startsWith("401");
      if (filterType === "customer") return codeString.startsWith("411");
      return true;
    });
  }, [data, filterType]);

  const table = useReactTable({
    data: filteredData,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { globalFilter, sorting, pagination, columnVisibility },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn: "fuzzy",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });


  return (
    <div className="flex justify-center mb-4">
      <div className="container mt-3 overflow-auto">
        <table className="table-auto w-full border">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-blue-900 text-white">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="p-2 cursor-pointer text-center"
                  >
                    <div className="flex justify-between items-center">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() === "asc" ? (
                        <IoMdArrowDropup />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <IoMdArrowDropdown />
                      ) : null}
                    </div>
                  </th>
                ))}
                <th>Action</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100 border-b">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 text-center border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="p-2 text-center border">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn border-none bg-white h-[27px] hover:bg-blue-900 hover:text-white">
                      <p className="mt-[-7px]">...</p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-36 z-1  p-2 shadow-sm">
                      <li><a className="flex gap-1 items-center"><FaEye /> View</a></li>
                      <li><a className="flex gap-1 items-center"><MdEdit /> Edit</a></li>
                      <li><a className="flex gap-1 items-center"><MdDelete /> Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-600 text-sm">
            Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, table.getPrePaginationRowModel().rows.length)} of {table.getPrePaginationRowModel().rows.length} entries
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1 bg-gray-200 text-sm text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <button
                key={i}
                onClick={() => table.setPageIndex(i)}
                className={`px-3 py-1 border rounded ${table.getState().pagination.pageIndex === i ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
