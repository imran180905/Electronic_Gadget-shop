import { useLoaderData } from "react-router-dom";
import { addTODb } from "../../utils/fakeDB";
import Card from "../card";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  const handleAddToCart = (id) => {
    console.log(id);
    addTODb(id);
  };
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
