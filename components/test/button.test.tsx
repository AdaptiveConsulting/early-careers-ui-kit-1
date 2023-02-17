import { assert, expect, test } from "vitest"
import renderer from "react-test-renderer"
import { Button } from "../src/button/Button"
function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test("Primary Button", () => {
  const component = renderer.create(<Button label="BUTTON TEXT" />)
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "btn-base bg-primary-light text-black outline-none outline-offset-0 hover:bg-primary-main active:outline-1 active:outline-offset-[-1] active:outline-primary-main active:bg-primary-light active:ring-0 active:ring-offset-0 focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:ring-offset-parent",
  )
})

test("Secondary Button On Light Background", () => {
  const component = renderer.create(
    <Button label="BUTTON TEXT" variant="secondary" isDarkTheme={true} />,
  )
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "btn-base btn-secondary text-primary-light outline-primary-light hover:outline-none hover:bg-primary-light hover:text-gray-800 active:bg-transparent active:outline active:outline-1 active:outline-offset-[-1] active:ring-offset-0 active:ring-0 active:outline-primary-main active:text-primary-light focus:ring-2 focus:ring-offset-2 active:bg-transparent focus:ring-warning-light ",
  )
})

test("Secondary Button On Dark Background", () => {
  const component = renderer.create(
    <Button label="BUTTON TEXT" variant="secondary" isDarkTheme={false} />,
  )
  const tree = toJson(component)

  expect(tree.props.className).toBe(
    "btn-base btn-secondary text-primary-dark outline-primary-dark hover:outline-none hover:bg-primary-dark hover:text-common-white active:bg-transparent active:outline active:outline-1 active:outline-offset-[-1] active:ring-offset-0 active:ring-0 active:outline-primary-dark active:text-primary-dark focus:ring-2 focus:ring-offset-2 active:bg-transparent focus:ring-warning-main ",
  )
})

test("Tertiary Button On Light Background", () => {
  const component = renderer.create(
    <Button label="BUTTON TEXT" variant="tertiary" isDarkTheme={true} />,
  )
  const tree = toJson(component)
  expect(tree.props.className).toBe(
    "btn-base btn-tertiary text-primary-dark hover:underline active:text-primary-dark active:outline-primary-dark active:bg-transparent active:outline active:outline-1 active:outline-offset-[-1] active:ring-0 active:ring-offset-0 active:no-underline focus:ring-warning-light focus:outline-primary-dark focus:text-primary-dark focus:ring-2 focus:ring-offset-2 focus:bg-transparent focus:outline focus:outline-1 focus:outline-offset-[-1] focus:no-underline",
  )
})

test("Tertiary Button On Dark Background", () => {
  const component = renderer.create(
    <Button label="BUTTON TEXT" variant="tertiary" isDarkTheme={false} />,
  )

  const tree = toJson(component)
  expect(tree.props.className).toBe(
    "btn-base btn-tertiary text-primary-light hover:underline active:text-primary-light active:outline-primary-light active:bg-transparent active:outline active:outline-1 active:outline-offset-[-1] active:ring-0 active:ring-offset-0 active:no-underline focus:ring-warning-main focus:outline-primary-light focus:text-primary-light focus:ring-2 focus:ring-offset-2 focus:bg-transparent focus:outline focus:outline-1 focus:outline-offset-[-1] focus:no-underline",
  )
})

test("Disabled", () => {
  const component = renderer.create(<Button label="BUTTON TEXT" disabled />)

  const tree = toJson(component)

  expect(tree.props.className).toBe("btn-base bg-grey-200 text-grey-500")
})
