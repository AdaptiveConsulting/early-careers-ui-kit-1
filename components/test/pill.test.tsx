import React from "react"
import { expect, test } from "vitest"
import renderer from "react-test-renderer"
import { Pill } from "../src/pill/Pill"

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test("Status Success Pill DarkMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={false} isDisabled={false} type="success" text="success" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none border-none bg-transparent text-common-white outline outline-2 outline-success-dark"
  )
})
test("Status Success Pill LightMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={true} isDisabled={false} type="success" text="success" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none bg-success-main"
  )
})

test("Status Warning Pill DarkMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={false} isDisabled={false} type="warning" text="warning" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none border-none bg-transparent text-common-white outline outline-2 outline-warning-dark"
  )
})
test("Status Warning Pill LightMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={true} isDisabled={false} type="warning" text="warning" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none bg-warning-main"
  )
})

test("Status Buy Pill DarkMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={false} isDisabled={false} type="buy" text="buy" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none border-none bg-transparent text-common-white outline outline-2 outline-buy-dark"
  )
})
test("Status Buy Pill LightMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={true} isDisabled={false} type="buy" text="buy" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none bg-error-light"
  )
})

test("Status Sell Pill DarkMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={false} isDisabled={false} type="sell" text="sell" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none border-none bg-transparent text-common-white outline outline-2 outline-sell-dark"
  )
})
test("Status Sell Pill LightMode", () => {
  const component = renderer.create(<Pill purpose="status" onLightBg={true} isDisabled={false} type="sell" text="sell" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none bg-secondary-light"
  )
})

test("Status Primary Pill LightMode", () => {
  const component = renderer.create(<Pill purpose="primary" onLightBg={true} isDisabled={false} text="button" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium bg-primary-main hover:bg-primary-light hover:outline-none hover:border-none focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:border-primary-light focus:outline-none focus:border-none active:outline active:outline-1 active:outline-offset--1 active:outline-primary-light active:ring-0 "
  )
})
test("Status Primary Pill LightMode disabled", () => {
  const component = renderer.create(<Pill purpose="primary" onLightBg={true} isDisabled={true} text="button" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium bg-primary-main hover:bg-primary-light hover:outline-none hover:border-none focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:border-primary-light focus:outline-none focus:border-none active:outline active:outline-1 active:outline-offset--1 active:outline-primary-light active:ring-0 bg-primary-light pointer-events-none opacity-60"
  )
})

test("Status Primary Pill DarkMode", () => {
  const component = renderer.create(<Pill purpose="primary" onLightBg={false} isDisabled={false} text="button" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium bg-transparent text-primary-main border-2 border-primary-main hover:border-primary-light hover:text-primary-light focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:border-primary-light focus:outline-none focus:border-none active:outline active:outline-1 active:outline-offset--1 active:outline-primary-light active:ring-0 "
  )
})
test("Status Primary Pill DarkMode disabled", () => {
  const component = renderer.create(<Pill purpose="primary" onLightBg={false} isDisabled={true} text="button" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "rounded-xl px-2 py-1 text-left text-sm font-medium bg-transparent text-primary-main border-2 border-primary-main hover:border-primary-light hover:text-primary-light focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:border-primary-light focus:outline-none focus:border-none active:outline active:outline-1 active:outline-offset--1 active:outline-primary-light active:ring-0 bg-transparent pointer-events-none opacity-60"
  )
})

test("Status Ticker Pill", () => {
  const component = renderer.create(<Pill purpose="ticker" onLightBg={false} isDisabled={true} text="googl" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "w-16 bg-transparent rounded-xl px-2 py-1 text-sm font-medium text-primary-main border-2 border-primary-main hover:border-primary-light hover:text-primary-light"
  )
})