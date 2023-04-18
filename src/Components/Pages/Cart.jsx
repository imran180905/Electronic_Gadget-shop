import { Link, useLoaderData } from "react-router-dom";
import { removeCart, removeDb } from "../../utils/fakeDB";
import { CartItem } from "../CartItem";

export const Cart = () => {
  const { products, initialCart } = useLoaderData();
  console.log(initialCart, products);
  let total = 0;
  if (initialCart.length > 0) {
    for (const product of initialCart) {
      total = total + product.price * product.quantity;
    }
    console.log(total);
  }
  const handleRemove = (id) => {
    removeDb(id);
  };

  const handleClearCart = () => {
    removeCart();
  };
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col min-w-3xl p-6 sm:p-10 ">
        <h1 className="text-2xl font-semibold">
          {initialCart.length ? " Review Cart Items" : " Cart is Empty !"}
        </h1>
        <ul className="flex flex-col divide-y divide-gray-800 ">
          {initialCart.map((product) => (
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
          {initialCart.length > 0 ? (
            <button onClick={handleClearCart} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back to shop</button>
            </Link>
          )}
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};
