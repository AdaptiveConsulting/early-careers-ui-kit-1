import { AgGridReactProps } from "ag-grid-react"

// structure of row
export type row = {
  make: string
  model: string
  price: number
  type?: string
}

//controls available
export interface GridType {
  isDark?: boolean
  rowData?: Array<row>
  columnDefs?: AgGridReactProps["columnDefs"]
  filter?: boolean
  sortable?: boolean
  resizable?: boolean
  pagination?: boolean
  perPage?: number
}
