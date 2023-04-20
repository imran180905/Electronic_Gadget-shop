import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import { removeCart, removeDb } from "../../utils/fakeDB";
import { CartItem } from "../CartItem";

export const Cart = () => {
  //   const { products, cart } = useLoaderData();
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }
  const handleRemove = (id) => {
    const remainingProduct = cart.filter((product) => product.id !== id);
    setCart(remainingProduct);
    removeDb(id);
    return toast.success("product removed");
  };

  const handleClearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      removeCart();
      return toast.success("All items are deleted 😊");
    }
  };

  //   Handle PlaceHolder
  const handleOrder = () => {
    if (cart.length > 0) {
      setCart([]);
      removeCart();
      return toast.success("Order Placed 👍");
    } else {
      return toast.error("Cart is Empty 💀");
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col min-w-3xl p-6 sm:p-10 ">
        <h1 className="text-2xl font-semibold">
          {cart.length ? " Review Cart Items" : " Cart is Empty !"}
        </h1>
        <ul className="flex flex-col divide-y divide-gray-800 ">
          {cart.map((product) => (
            <CartItem
              product={product}
              key={product.id}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
        <p className="text-gray-800 text-right text-xl">
          {" "}
          Total amount: <span className="font-semibold">{total}$</span>
        </p>
        <p className="text-gray-500 text-right">
          Not including taxes and shopping costs
        </p>
        <div className="space-x-3 text-center space-y-4">
          {cart.length > 0 ? (
            <button onClick={handleClearCart} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back to shop</button>
            </Link>
          )}
          <button onClick={handleOrder} className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
