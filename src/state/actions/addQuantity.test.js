// Node modules
import { expect, test } from "vitest";

// Project files
import addQuantity from "./addQuantity";

test("Updates an item in the state", () => {
  // Arrange
  const state = [
    { id: 2, color: 0, variant: 1, quantity: 2 }, // Trådfria Lampor, "white", power: 9.5, price 300x2 so 600 in total
    { id: 4, color: 0, variant: 1, quantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
    { id: 6, color: 1, variant: 1, quantity: 3 }, //Bluetooth speaker, "white", price 950x3 2850 in total
  ];
  const action = {
    type: "update-item-quantity",
    payload: {
      index: 1, // Nintendo switch
      option: {
        color: "red",
        storage: ["250", "500"],
        quantity: 3, // quantity in stock
      },
      ammount: 2, // valid because we have 1 in the cart, we want 2 more, and there is 3 in stock
    },
  };
  const result = [
    { id: 2, color: 0, variant: 1, quantity: 2 },
    { id: 4, color: 0, variant: 1, quantity: 3 }, // Now have 3 Nintendo Switch in total
    { id: 6, color: 1, variant: 1, quantity: 3 },
  ];

  // Act
  const test = addQuantity(state, action);

  // Assert
  expect(test).toEqual(result);
});

test("Do not update state if there is not quantity available", () => {
  // Arrange
  const state = [
    { id: 2, color: 0, variant: 1, quantity: 2 }, // Trådfria Lampor, "white", power: 9.5, price 300x2 so 600 in total
    { id: 4, color: 0, variant: 1, quantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
    { id: 6, color: 1, variant: 1, quantity: 3 }, //Bluetooth speaker, "white", price 950x3 2850 in total
  ];
  const action = {
    type: "update-item-quantity",
    payload: {
      index: 1, // Nintendo switch
      option: {
        color: "red",
        storage: ["250", "500"],
        quantity: 3, // quantity in stock
      },
      ammount: 5, // invalid because we have 1 in the cart, we want 5 more, but there is only 3 in stock
    },
  };
  const result = [
    { id: 2, color: 0, variant: 1, quantity: 2 },
    { id: 4, color: 0, variant: 1, quantity: 1 }, // keep the same
    { id: 6, color: 1, variant: 1, quantity: 3 },
  ];

  // Act
  const test = addQuantity(state, action);

  // Assert
  expect(test).toEqual(result);
});
