const Card = ({ product }) => {
  const { name, picture, price, category } = product;
  return (
    <div className="border bg-gray-100  p-8 rounded-lg">
      <img
        className=" shadow-lg w-full h-54 object-cover rounded-md md:h-64 lg:h-72 mb-6"
        src={picture}
        alt="device pic"
      ></img>
      <h1
        className="text-2xl text-gray-900 font-bold mb-3
      "
      >
        {name}
      </h1>
      <p className="text-xl font-semibold">Category: {category}</p>
      <p className="text-xl mt-3">Price: {price} $</p>
    </div>
  );
};
export default Card;
