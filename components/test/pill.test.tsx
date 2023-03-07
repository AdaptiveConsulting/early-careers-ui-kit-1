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

function testPill(
  purpose: string,
  isDarkTheme: boolean,
  isDisabled: boolean,
  text: string,
  type?: string | undefined,
) {
  const component = renderer.create(
    <Pill
      purpose={purpose}
      isDarkTheme={isDarkTheme}
      isDisabled={isDisabled}
      type={type}
      text={text}
    />,
  )
  const tree = toJson(component)
  return tree
}

const baseNonPrimary =
  "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none "
const baseNonPrimaryDark =
  "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none status-pill-dark"
const basePrimary = "rounded-xl px-2 py-1 text-left text-sm font-medium "

test("Status Success Pill DarkMode", () => {
  const result = testPill("status", true, false, "success", "success")
  expect(result.props.className).toBe(
    baseNonPrimaryDark + " outline-success-dark",
  )
})
test("Status Success Pill LightMode", () => {
  const result = testPill("status", false, false, "success", "success")
  expect(result.props.className).toBe(baseNonPrimary + "bg-success-main")
})

test("Status Warning Pill DarkMode", () => {
  const result = testPill("status", true, false, "warning", "warning")
  expect(result.props.className).toBe(
    baseNonPrimaryDark + " outline-warning-dark",
  )
})
test("Status Warning Pill LightMode", () => {
  const result = testPill("status", false, false, "warning", "warning")
  expect(result.props.className).toBe(baseNonPrimary + "bg-warning-main")
})

test("Status Buy Pill DarkMode", () => {
  const result = testPill("status", true, false, "buy", "buy")
  expect(result.props.className).toBe(baseNonPrimaryDark + " outline-buy-dark")
})
test("Status Buy Pill LightMode", () => {
  const result = testPill("status", false, false, "buy", "buy")
  expect(result.props.className).toBe(baseNonPrimary + "bg-error-light")
})

test("Status Sell Pill DarkMode", () => {
  const result = testPill("status", true, false, "sell", "sell")
  expect(result.props.className).toBe(baseNonPrimaryDark + " outline-sell-dark")
})
test("Status Sell Pill LightMode", () => {
  const result = testPill("status", false, false, "sell", "sell")
  expect(result.props.className).toBe(baseNonPrimary + "bg-secondary-light")
})

test("Status Primary Pill DarkMode", () => {
  const result = testPill("primary", false, false, "button")
  expect(result.props.className).toBe(
    basePrimary + "bg-transparent ticker-pill",
  )
})
test("Status Primary Pill DarkMode Disabled", () => {
  const result = testPill("primary", false, true, "button")
  expect(result.props.className).toBe(
    basePrimary + "primary-pill bg-transparent",
  )
})

test("Status Primary Pill LightMode", () => {
  const result = testPill("primary", true, false, "button")
  expect(result.props.className).toBe(
    basePrimary +
      "bg-primary-main hover:bg-primary-light hover:outline-none hover:border-none ",
  )
})
test("Status Primary Pill LightMode Disabled", () => {
  const result = testPill("primary", true, true, "button")
  expect(result.props.className).toBe(
    basePrimary + "primary-pill bg-primary-light",
  )
})

test("Status Ticker Pill", () => {
  const result = testPill("ticker", false, true, "googl")
  expect(result.props.className).toBe(
    "w-16 bg-transparent rounded-xl px-2 py-1 text-sm font-medium ticker-pill",
  )
})
