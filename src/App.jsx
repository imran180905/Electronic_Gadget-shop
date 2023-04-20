import { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Layout from "./Components/Layout";
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Layout>
          <div>
            <Outlet />
          </div>
        </Layout>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
