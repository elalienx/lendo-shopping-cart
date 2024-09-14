// Node modules
import { expect, test } from "vitest";

// Project files
import ExampleScript from "./ExampleScript";

test("Should show warning if name is empty", () => {
  // Arrange
  const name = "";
  const result = "Name is missing";

  // Act
  const test = ExampleScript(name);

  // Assert
  expect(test).toBe(result);
});

test("Should great after passing a name", () => {
  // Arrange
  const name = "Eduardo";
  const result = "Hello Eduardo!";

  // Act
  const test = ExampleScript(name);

  // Assert
  expect(test).toBe(result);
});
