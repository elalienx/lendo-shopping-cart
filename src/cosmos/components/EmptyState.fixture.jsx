// Project files
import EmptyState from "../../components/empty-state/EmptyState";

// Properties
const home = {
  title: "No products available",
  text: "We are riding at full speed to add products to our store as soon as possible!",
  image: "",
  alt: "A guy ridding a red Vespa motorcycle. He does not realize that is dropping his pizza behind.",
};
const product1 = {
  title: "Invalid product",
  text: "This product does not exist. Maybe you just saw it in a dream!",
  image: "",
  alt: "A guy sleping in a bed shaped like a dollar bill.",
};
const product2 = {
  title: "Product not available",
  text: "",
  image: "",
  alt: "",
};
const checkout = {
  title: "Your Cart is empty",
  text: "Please go back to the home page and add some products. Capitalism needs you!",
  image: "",
  alt: "A girl inside a supermarket shopping cart listening to music using her phone.",
};
const page404 = {
  title: "Page not found",
  text: "We did our best but could not find your page. Check the link and try again!",
  image: "",
  alt: "A guy checking his mobile phone. A screnshot of his mobile with a map is shown behind.",
};

export default {
  HomeNoProducts: <EmptyState item={home} />,
  ProductInvalidId: <EmptyState item={product1} />,
  ProductNotAvailable: <EmptyState item={product2} />,
  CheckoutEmpty: <EmptyState item={checkout} />,
  Page404: <EmptyState item={page404} />,
};
