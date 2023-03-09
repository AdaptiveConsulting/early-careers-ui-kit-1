import React from "react"
import { expect, test } from "vitest"
import renderer from "react-test-renderer"
import { Switch } from "../src/switch/Switch"

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test("Toggle Switch Primary in light mode", () => {
  const component = renderer.create(
    <Switch variant="primary" isDarkTheme={false} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toBe(
    "cursor-pointer w-8 h-3 appearance-none rounded-full bg-grey-300 transition duration-200 relative after:w-5 after:h-5 after:rounded-full after:bg-common-white checked:after:transition checked:after:translate-x-5 after:absolute after:right-4 after:bottom-[-4px] after:transition after:duration-200 after:shadow-lg after:hover:ring-8 after:ring-grey-400/[.20] primary",
  )
})
test("Toggle Switch Primary in dark mode", () => {
  const component = renderer.create(
    <Switch variant="primary" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toContain("primary-dark")
})

test("Toggle Switch Secondary", () => {
  const component = renderer.create(
    <Switch variant="secondary" isDarkTheme={false} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toBe(
    "cursor-pointer w-8 h-3 appearance-none rounded-full bg-grey-300 transition duration-200 relative after:w-5 after:h-5 after:rounded-full after:bg-common-white checked:after:transition checked:after:translate-x-5 after:absolute after:right-4 after:bottom-[-4px] after:transition after:duration-200 after:shadow-lg after:hover:ring-8 after:ring-grey-400/[.20] secondary",
  )
})
test("Toggle Switch Secondary in dark mode", () => {
  const component = renderer.create(
    <Switch variant="secondary" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toContain("secondary-dark")
})

test("Toggle Switch error", () => {
  const component = renderer.create(
    <Switch variant="error" isDarkTheme={false} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toBe(
    "cursor-pointer w-8 h-3 appearance-none rounded-full bg-grey-300 transition duration-200 relative after:w-5 after:h-5 after:rounded-full after:bg-common-white checked:after:transition checked:after:translate-x-5 after:absolute after:right-4 after:bottom-[-4px] after:transition after:duration-200 after:shadow-lg after:hover:ring-8 after:ring-grey-400/[.20] error",
  )
})
test("Toggle Switch Error in dark mode", () => {
  const component = renderer.create(
    <Switch variant="error" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toContain("error-dark")
})

test("Toggle Switch success", () => {
  const component = renderer.create(
    <Switch variant="success" isDarkTheme={false} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toBe(
    "cursor-pointer w-8 h-3 appearance-none rounded-full bg-grey-300 transition duration-200 relative after:w-5 after:h-5 after:rounded-full after:bg-common-white checked:after:transition checked:after:translate-x-5 after:absolute after:right-4 after:bottom-[-4px] after:transition after:duration-200 after:shadow-lg after:hover:ring-8 after:ring-grey-400/[.20] success",
  )
})
test("Toggle Switch Success in dark mode", () => {
  const component = renderer.create(
    <Switch variant="success" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toContain("success-dark")
})

test("Toggle Switch warning", () => {
  const component = renderer.create(
    <Switch variant="warning" isDarkTheme={false} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toBe(
    "cursor-pointer w-8 h-3 appearance-none rounded-full bg-grey-300 transition duration-200 relative after:w-5 after:h-5 after:rounded-full after:bg-common-white checked:after:transition checked:after:translate-x-5 after:absolute after:right-4 after:bottom-[-4px] after:transition after:duration-200 after:shadow-lg after:hover:ring-8 after:ring-grey-400/[.20] warning",
  )
})
test("Toggle Switch Warning in dark mode", () => {
  const component = renderer.create(
    <Switch variant="warning" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.className).toContain("warning-dark")
})
test("Toggle Switch disabled", () => {
  const component = renderer.create(
    <Switch variant="primary" isDisabled={true} />,
  )
  const tree = toJson(component)
  expect(tree.children[0].props.disabled).toBe(true)
})
