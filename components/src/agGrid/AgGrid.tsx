import { useMemo } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { GridType } from "./AgGridTypes"
import "./AgGrid.css"

export default function AgGrid({
  isDark,
  rowData,
  columnDefs,
  sortable = false,
  filter = false,
  resizable = false,
  pagination = false,
  perPage = 20,
}: GridType) {
  const defaultColDef = useMemo(
    () => ({
      sortable: sortable,
      filter: filter,
      resizable: resizable,
      pagination: pagination,
      paginationPageSize: perPage,
      flex: 1,
      minWidth: 100,
    }),
    [sortable, filter, resizable, pagination, perPage],
  )

  return (
    <div
      className={`flex h-full w-full ${
        isDark ? "ag-theme-alpine-dark" : "ag-theme-alpine"
      }`}
    >
      <div className={`w-[900px] h-[600px] p-4`}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
          pagination={pagination}
          paginationPageSize={perPage}
        />
      </div>
    </div>
  )
}
