import { useLoaderData } from "react-router-dom";
import Card from "../card";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
