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
