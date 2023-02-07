import React from "react"
import { expect, test } from "vitest"
import renderer from "react-test-renderer"
import { Slider } from "../src/Slider/Slider"

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test("Slider renders in default color", () => {
  const component = renderer.create(<Slider color="default" size="medium" />)
  const tree = toJson(component)
  expect(tree.props.className).toBe("default default medium")
})

test("Slider renders in disabled color", () => {
  const component = renderer.create(<Slider color="disabled" size="small" />)
  const tree = toJson(component)
  expect(tree.props.className).toBe("default disabled small")
  // expect(tree.props)toBe("default default medium")
})

test("Slider renders in secondary color", () => {
  const component = renderer.create(<Slider color="secondary" size="small" />)
  const tree = toJson(component)
  expect(tree.props.className).toBe("default secondary small")
  // expect(tree.props)toBe("default default medium")
})

test("Slider renders in small version", () => {
  const component = renderer.create(<Slider color="default" size="small" />)
  const tree = toJson(component)
  expect(tree.props.className).toBe("default default small")
  // expect(tree.props)toBe("default default medium")
})
test("Slider is disabled", () => {
  const component = renderer.create(
    <Slider color="secondary" size="small" disabled={true} />,
  )
  const tree = toJson(component)
  expect(tree.props.disabled).toBe(true)
})
