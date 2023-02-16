import { render, screen, fireEvent } from "@testing-library/react"
import { RadioGroup } from "../radioGroup/RadioGroup"

describe("Radio Group", () => {
  const onChange = vi.fn(() => "1")
  const testOptionObject = [{ id: "1", labelText: "Hello World" }]

  test("renders correct options in group according to option data", () => {
    render(
      <RadioGroup
        options={testOptionObject}
        groupName={"answers"}
        onChange={onChange}
      />,
    )
    expect(screen.findByText("Hello World")).toBeDefined()
  })
  test("Check if onChange function has been called and returns correct id", async () => {
    render(
      <RadioGroup
        options={testOptionObject}
        groupName={"answers"}
        onChange={onChange}
      />,
    )
    const radioButtonGroup = screen.getByText("Hello World")
    fireEvent.click(radioButtonGroup)

    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveReturnedWith("1")
  })
})
