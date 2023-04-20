import { useContext } from "react";
import { toast } from "react-hot-toast";
import { CartContext, ProductContext } from "../../App";
import Card from "../card";

const Shop = () => {
  // const products = useLoaderData();
  // console.log(products);
  const [cart, setCart] = useContext(CartContext || []);
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    toast.success("Product Added! 🛒");
    setCart(newCart);
    addToDb(product.id);
  };

  // Load Data using Context Api
  const products = useContext(ProductContext);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-container">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
export default Shop;
