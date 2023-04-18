//import { TrashIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

export const CartItem = ({ product, handleRemove }) => {
  const { price, picture, name, category, quantity, id } = product;
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div>
        <div className="flex w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={picture}
            alt="Product picture"
          ></img>
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  {name}
                </h3>
                <p className="text-sm text-gray-400">Quantity: {quantity}</p>
              </div>
            </div>

            <button
              className="flex items-center px-2 py-1 pl-0 space-x-1"
              type="button"
              onClick={() => handleRemove(id)}
            >
              <TrashIcon className="w-6 h-6" />
              <p>Remove</p>
            </button>
          </div>

          <div className="text-right">
            <p className="text-xl font-semibold text-gray-900">{price}$</p>
            <p className="text-md font-mono text-gray-700">
              Total: {price * quantity}$
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
