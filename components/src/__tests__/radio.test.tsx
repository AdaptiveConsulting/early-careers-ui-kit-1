import renderer, {
  ReactTestRenderer,
  ReactTestRendererJSON,
} from "react-test-renderer"
import { fireEvent, render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import { Radio } from "../radio/Radio"

function toJson(component: ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as ReactTestRendererJSON
}
describe("Radio Button", () => {
  const onChange = vi.fn(() => "1")
  test("Radio button on light theme", () => {
    const component = renderer.create(
      <Radio
        isDarkTheme={false}
        isDisabled={false}
        labelText="Option 1"
        optionId="1"
        onChange={onChange}
      />,
    )
    const tree = toJson(component)
    expect((tree.children?.[0] as ReactTestRendererJSON).props.className).toBe(
      "peer appearance-none min-w-[16px] min-h-[16px] w-4 h-4 mt-[3.5px] border-2 border-solid border-grey-600 rounded-full bg-clip-content p-0.5 hover:border-primary-main checked:bg-primary-main checked:border-primary-main disabled:pointer-events-none disabled:border-black/[.38]",
    )
  })

  test("Radio button on dark theme", () => {
    const component = renderer.create(
      <Radio
        isDarkTheme={true}
        isDisabled={false}
        labelText="Option 1"
        optionId="1"
        onChange={onChange}
      />,
    )
    const tree = toJson(component)
    expect((tree.children?.[0] as ReactTestRendererJSON).props.className).toBe(
      "peer appearance-none min-w-[16px] min-h-[16px] w-4 h-4 mt-[3.5px] border-2 border-solid border-grey-400 rounded-full bg-clip-content p-0.5 hover:border-primary-main checked:bg-primary-main checked:border-primary-main disabled:pointer-events-none disabled:border-white/[.38]",
    )
  })

  test("Label text on light theme", () => {
    const component = renderer.create(
      <Radio
        isDarkTheme={false}
        isDisabled={false}
        labelText="Option 1"
        optionId="1"
        onChange={onChange}
      />,
    )
    const tree = toJson(component)

    expect((tree.children?.[1] as ReactTestRendererJSON).props.className).toBe(
      "text-opacity-black-83 peer-checked:text-opacity-black-95 peer-hover:text-opacity-black-95 peer-disabled:text-black/[.38] peer-disabled:pointer-events-none max-w-full",
    )
  })

  test("Label text on dark theme", () => {
    const component = renderer.create(
      <Radio
        isDarkTheme={true}
        isDisabled={false}
        labelText="Option 1"
        optionId="1"
        onChange={onChange}
      />,
    )
    const tree = toJson(component)
    expect((tree.children?.[1] as ReactTestRendererJSON).props.className).toBe(
      "text-opacity-white-83 peer-checked:text-opacity-white-95 peer-hover:text-opacity-white-95 peer-disabled:text-white/[.38] peer-disabled:pointer-events-none max-w-full",
    )
  })
  test("Disabled radio button", () => {
    const component = renderer.create(
      <Radio
        isDarkTheme={false}
        isDisabled={true}
        labelText="Option 1"
        optionId="1"
        onChange={onChange}
      />,
    )
    const tree = toJson(component)
    expect((tree.children?.[0] as ReactTestRendererJSON).props.disabled).toBe(
      true,
    )
  })
  test("Calls onChange method", async () => {
    render(<Radio labelText="Hello World" optionId="1" onChange={onChange} />)
    const radioButton = screen.getByText("Hello World")
    fireEvent.click(radioButton)
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveReturnedWith("1")
  })
})
