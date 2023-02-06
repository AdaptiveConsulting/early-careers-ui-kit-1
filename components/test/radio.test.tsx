import React from "react"
import { expect, test } from "vitest"
import renderer from "react-test-renderer"
import { Radio } from "../src/radio/Radio"

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test("Radio button on light theme", () => {
  const component = renderer.create(
    <Radio isDarkTheme={false} isDisabled={false} labelText="Option 1" />,
  )
  const tree = toJson(component)

  expect(tree.children[0].children[0].props.className).toBe(
    "peer appearance-none min-w-[16px] min-h-[16px] w-4 h-4 border-2 border-solid border-grey-600 rounded-full bg-clip-content p-0.5 hover:border-primary-main checked:bg-primary-main checked:border-primary-main disabled:pointer-events-none disabled:border-black/[.38]",
  )
})

test("Radio button on dark theme", () => {
  const component = renderer.create(
    <Radio isDarkTheme={true} isDisabled={false} labelText="Option 1" />,
  )
  const tree = toJson(component)

  expect(tree.children[0].children[0].props.className).toBe(
    "peer appearance-none min-w-[16px] min-h-[16px] w-4 h-4 border-2 border-solid border-grey-400 rounded-full bg-clip-content p-0.5 hover:border-primary-main checked:bg-primary-main checked:border-primary-main disabled:pointer-events-none disabled:border-white/[.38]",
  )
})

test("Label text on light theme", () => {
  const component = renderer.create(
    <Radio isDarkTheme={false} isDisabled={false} labelText="Option 1" />,
  )
  const tree = toJson(component)

  console.log(tree.children[0].children)
  expect(tree.children[0].children[1].props.className).toBe(
    "text-opacity-black-83 peer-checked:text-opacity-black-95 peer-hover:text-opacity-black-95 peer-disabled:text-black/[.38] peer-disabled:pointer-events-none max-w-fill break-words",
  )
})

test("Label text on dark theme", () => {
  const component = renderer.create(
    <Radio isDarkTheme={true} isDisabled={false} labelText="Option 1" />,
  )
  const tree = toJson(component)

  console.log(tree.children[0].children)
  expect(tree.children[0].children[1].props.className).toBe(
    "text-opacity-white-83 peer-checked:text-opacity-white-95 peer-hover:text-opacity-white-95 peer-disabled:text-white/[.38] peer-disabled:pointer-events-none max-w-fill break-words",
  )
})
