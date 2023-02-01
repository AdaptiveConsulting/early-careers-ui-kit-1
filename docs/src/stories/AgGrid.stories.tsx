import { AgGrid } from "components/src"
import { GridType, fooData } from "components/src/"
import { StoryFn, Meta } from "@storybook/react"
import Car from "components/src/assets/sedan.png"
import Jeep from "components/src/assets/jeep.png"
import Van from "components/src/assets/van.png"

//  Defaults used as a base for each story
const defaultArgs: GridType = {
  isDark: false,
  rowData: [],
  columnDefs: [],
  filter: false,
  resizable: false,
  sortable: false,
  pagination: true,
  perPage: 20,
}

export default {
  title: "AgGrid/Table",
  component: AgGrid,
  argTypes: {},
} as Meta<typeof AgGrid>

const Template: StoryFn<typeof AgGrid> = (args) => <AgGrid {...args} />

// Override the default with data
export const Primary = Template.bind({})

Primary.args = {
  ...defaultArgs,
  isDark: true,
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    { make: "Nissan", model: "KDH", price: 32000, type: "van" },
    { make: "KIA", model: "Sorento", price: 72000, type: "jeep" },
  ],
  columnDefs: [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "type" },
  ],
  sortable: true,
  resizable: true,
  filter: true,
  pagination: true,
  perPage: 20,
}

// Another story, showing the table’s empty state
export const NoData = Template.bind({})
NoData.args = {
  ...defaultArgs,
}

//Lots of Data
export const LotsOfData = Template.bind({})

LotsOfData.args = {
  ...defaultArgs,
  isDark: true,
  rowData: fooData,
  columnDefs: [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "type" },
  ],
  sortable: true,
  resizable: true,
  filter: true,
  pagination: false,
  perPage: 20,
}

// colour style dependent on the value of the car
const carPrice = (value: number) => {
  return { color: value > 50000 ? "#FF5733" : "#00E676" }
}

// this will render the cell to pick out the corresponsing image to the "type" cell
const carType = (value: string) => {
  return (
    <img
      alt=""
      src={value === "sedan" ? Car : value === "jeep" ? Jeep : Van}
      className={"w-[35px] h-[35px]"}
    />
  )
}

export const CellRendering = Template.bind({})
CellRendering.args = {
  ...defaultArgs,
  isDark: true,
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    { make: "Nissan", model: "KDH", price: 32000, type: "van" },
    { make: "KIA", model: "Sorento", price: 72000, type: "jeep" },
  ],
  //  enable custom styling and rendering based on the value of the cells
  columnDefs: [
    { field: "make" },
    { field: "model" },
    {
      field: "price",
      cellStyle: (e: any) => {
        return carPrice(e.value)
      },
    },
    {
      field: "type",
      cellRenderer: (e: any) => {
        return carType(e.value)
      },
    },
  ],
  sortable: true,
  resizable: true,
  filter: true,
  pagination: false,
  perPage: 20,
}

export const ConditionalEditing = Template.bind({})

ConditionalEditing.args = {
  ...defaultArgs,
  isDark: true,
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    { make: "Nissan", model: "KDH", price: 32000, type: "van" },
    { make: "KIA", model: "Sorento", price: 72000, type: "jeep" },
  ],
  columnDefs: [
    {
      field: "make",
      editable: (e) => {
        // Only allow editing of "Toyota" and "Nissan" rows
        return e.data.make === "Toyota" || e.data.make === "Nissan"
      },
    },
    { field: "model" },
    { field: "price" },
    { field: "type" },
  ],
  sortable: true,
  resizable: true,
  filter: true,
  pagination: false,
  perPage: 20,
}
export const CheckboxSelection = Template.bind({})

CheckboxSelection.args = {
  ...defaultArgs,
  isDark: true,
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    { make: "Nissan", model: "KDH", price: 32000, type: "van" },
    { make: "KIA", model: "Sorento", price: 72000, type: "jeep" },
  ],
  columnDefs: [
    {
      field: "make",
      checkboxSelection: true,
    },
    { field: "model" },
    { field: "price" },
    { field: "type" },
  ],
  sortable: true,
  resizable: true,
  filter: true,
  pagination: false,
  perPage: 20,
}
