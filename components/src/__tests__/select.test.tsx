import renderer, { ReactTestRendererJSON } from "react-test-renderer"
import { Select } from "../select/Select"

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

const options = [{ id: "Option 1", label: "Option one", isSelected: false }]

describe("Select component", () => {
  test("Standard Select variant", () => {
    const component = renderer.create(
      <Select
        color="primary"
        height="medium"
        variant="standard"
        options={options}
        onChange={(options) => options}
      />,
    )
    const tree = toJson(component)
    expect((tree.children?.[0] as ReactTestRendererJSON).props.className).toBe(
      "border-b-2 border-grey-200 hover:border-grey-400 focus-within:[&:not(hover)]:border-primary-main focus-within:[&:not(hover)]:outline-primary-main cursor-pointer flex items-center px-2",
    )
  })

  // ONYL TESTING WHAT IS UNIQUE TO THE VARIANT IE. ONLY CHECKING WHAT HAS CHANGED
  test("Filled Select variant", () => {
    const component = renderer.create(
      <Select
        color="primary"
        height="medium"
        variant="filled"
        options={options}
        onChange={(options) => options}
      />,
    )
    const tree = toJson(component)
    expect(
      (tree.children?.[0] as ReactTestRendererJSON).props.className,
    ).toContain(
      "border-b-2 bg-[#eaeaea] border-gray-300 hover:border-grey-400 hover:bg-[#e2e2e2]",
    )
  })
  test("Outline Select variant", () => {
    const component = renderer.create(
      <Select
        color="primary"
        height="medium"
        variant="outlined"
        options={options}
        onChange={(options) => options}
      />,
    )
    const tree = toJson(component)
    expect(
      (tree.children?.[0] as ReactTestRendererJSON).props.className,
    ).toContain(
      "outline outline-[1px] rounded-[5px] focus-within:[&:not(hover)]:outline-[2px] hover:outline-black outline-grey-400",
    )
  })

  // Theme Testing
  test("Outline Select variant dark theme", () => {
    const component = renderer.create(
      <Select
        isDarkTheme={true}
        color="primary"
        height="medium"
        variant="outlined"
        options={options}
        onChange={(options) => options}
      />,
    )
    const tree = toJson(component)
    expect(
      (tree.children?.[0] as ReactTestRendererJSON).props.className,
    ).toContain("outline-[#555555] hover:outline-white")
  })

  test("Filled Select variant dark theme", () => {
    const component = renderer.create(
      <Select
        isDarkTheme={true}
        color="primary"
        height="medium"
        variant="filled"
        options={options}
        onChange={(options) => options}
      />,
    )
    const tree = toJson(component)
    expect(
      (tree.children?.[0] as ReactTestRendererJSON).props.className,
    ).toContain(
      "bg-[#444444] border-[#555555] hover:border-[#7f7f7f] hover:bg-[#4d4d4d]",
    )
  })

  test("Standard Select variant dark theme", () => {
    const component = renderer.create(
      <Select
        isDarkTheme={true}
        color="primary"
        height="medium"
        variant="standard"
        options={options}
        onChange={(options) => options}
      />,
    )
    const tree = toJson(component)
    expect(
      (tree.children?.[0] as ReactTestRendererJSON).props.className,
    ).toContain("border-[#555555] hover:border-[#7f7f7f]")
  })
})
