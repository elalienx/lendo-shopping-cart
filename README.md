# Lendo Shopping Cart

This is a coding assignment for Lendo.

Link to demo: [Demo website](https://lendo-shopping-cart.web.app)

## Installation

To run locally clone this repository into your computer and then:

1. Install dependencies using `npm clean-install` to ensure using the same version as the project.
1. Run using `npm run dev`.
1. Open your browser and navigate to `http://localhost:5173`.

## Features

1. A CI/CD pipeline that runs the Vitest test, React Testing Library tests, and deploys to Firebase Hosting.
1. A gallery to view components similar to Storybook but with a lighter libraty called [React Cosmos](https://reactcosmos.org).
1. Reducers to mutate the state outside React and make it easily testable.
1. Responsive design.
1. User flows to plan the UX ([link](https://whimsical.com/lendo-Devit5GaSiDyojUePbMpEz@6HYTAunKLgTVswxCCSQ4eXBALzucnJcoopxkWQAUe9NGL4J))

## View React Components

If you'd like to view the React components individually, you can use the component gallery built with [React Cosmos](https://reactcosmos.org):

1. Start the component gallery with `npm run cosmos`
1. Open your browser and go to `localhost:5001` (or the port specified in the terminal).

## Requirements

Create the following views/pages using the mock JSON:

1. 🏠 Product view
   - A list with the name and pricing of each product. ✅
   - The user should view the number of items in the cart. ✅
2. 👠 Detail view
   - A details view where a user can view product details and add the product to the cart. ✅
   - Make sure a product cannot be added if it is unavailable. ✅
   - If a product has variants (colors, sizes, etc) the user should be able to select the variant they want before adding it to their cart. ✅
   - Show visual feedback when adding a product. ✅ (Toast notification)
3. 🛒 Checkout view
   - A checkout view where a user can see their cart before proceeding with payments. ✅ (payments page its out of scope)
   - The user should be able to increment and decrement the product quantity as well. ✅
   - As remove the product completely. ✅

## Product Option Analysis

![Mind map diagram](./public/readme-product-options-analysis.png)

The tricky part is realizing that **color** serves as the index for product-option. Selecting the first color maps to `array[0]`, the second to `array[1]`, and so on. After that, it’s just a simple filter operation.

## Bugs Alert 🐞

1. There’s a bug preventing the selection of the Samsung TV due to the missing variant. The fix itself should only take a few minutes, but it’s the refactoring needed to identify the bug that takes time. I’ll take a break and return to resolve it.

⚠️ **Note:** If you find any other bug, please open a pull request.

## Future Improvements

The project could be enhanced with the following features:

1. Detect and update quantity for the same product, color, and variant instead of adding a new item to the cart.
1. Incorporate TypeScript for better type safety.
1. Refactor for improved maintainability (an extra day would help).
1. Develop a custom notification system to avoid external libraries.
1. Add Biome linter.
1. Implement Suspense to optimize build size.
1. Enhance the Product page design ([reference](./public/readme-product-page.png)).
