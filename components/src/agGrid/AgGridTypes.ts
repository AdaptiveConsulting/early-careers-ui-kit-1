import { AgGridReactProps } from "ag-grid-react"

// structure of the table
export type row = {
  make: string
  model: string
  price: number
  type?: string
}

//which controls are available
export interface GridType {
  isDark?: boolean
  rowData?: Array<row>
  columnDefs?: AgGridReactProps["columnDefs"]
  filter?: boolean
  sortable?: boolean
  resizable?: boolean
}
