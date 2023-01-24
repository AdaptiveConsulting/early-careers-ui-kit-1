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
}: GridType) {
  const defaultColDef = useMemo(
    () => ({
      sortable: sortable,
      filter: filter,
      resizable: resizable,
      editable: true,
      flex: 1,
      minWidth: 100,
    }),
    [sortable, filter, resizable],
  )

  return (
    <div className={"w-[850px] h-[400px]"}>
      <AgGridReact
        className={`${isDark ? "ag-theme-alpine-dark" : "ag-theme-alpine"}`}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  )
}
