import React from "react"
import { assert, expect, test } from "vitest"
import renderer from "react-test-renderer"
import { Checkbox } from "../src/checkbox/Checkbox"

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test("Primary checkbox component on light theme.", () => {
  const component = renderer.create(<Checkbox />)
  const tree = toJson(component)
  //expect(tree).toMatchSnapshot()
  expect(tree.props.className).toBe("accent-primary-light w-4 h-4")
})

test("Secondary checkbox component on light theme.", () => {
  const component = renderer.create(<Checkbox checkboxType="Secondary" />)
  const tree = toJson(component)
  //expect(tree).toMatchSnapshot()
  expect(tree.props.className).toBe("accent-secondary-light w-4 h-4")
})

test("Error checkbox component on light theme.", () => {
  const component = renderer.create(<Checkbox checkboxType="Error" />)
  const tree = toJson(component)
  //expect(tree).toMatchSnapshot()
  expect(tree.props.className).toBe("accent-error-light w-4 h-4")
})
test("Success checkbox component on light theme.", () => {
  const component = renderer.create(<Checkbox checkboxType="Success" />)
  const tree = toJson(component)
  //expect(tree).toMatchSnapshot()
  expect(tree.props.className).toBe("accent-success-light w-4 h-4")
})
test("Warning checkbox component on light theme.", () => {
  const component = renderer.create(<Checkbox checkboxType="Warning" />)
  const tree = toJson(component)
  expect(tree.props.className).toBe("accent-warning-light w-4 h-4")
})
test("Primary checkbox component on dark theme.", () => {
  const component = renderer.create(
    <Checkbox checkboxType="Primary" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.props.className).toBe("accent-primary-dark w-4 h-4")
})
test("Primary, disabled checkbox component on dark theme with small size.", () => {
  const component = renderer.create(
    <Checkbox
      checkboxType="Primary"
      isDarkTheme={true}
      isDisabled={true}
      size="small"
    />,
  )
  const tree = toJson(component)
  console.log(tree)
  expect(tree.props.className).toBe("accent-primary-dark w-3 h-3")
  expect(tree.props.disabled).toBe(true)
})
