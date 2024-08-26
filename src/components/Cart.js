import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeItems } from "../utils/store/CartSlice";
import { MdDeleteForever, MdAddCircle } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <>
      <div className="h-[80vh] flex items-center justify-center bg-slate-100">
        <div className="bg-white rounded-lg shadow-lg h-96 w-2/3 p-8 overflow-x-hidden">
          <p className="font-bold text-3xl mb-2">Cart</p>
          {cartData.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={handleClearCart}
                className="bg-red-500 p-2 text-white font-bold rounded-lg mb-5 hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          )}
          <div className="text-center">
            <ul className="flex flex-col space-y-2">
              {cartData.length === 0 && <p>No items in cart</p>}
              {cartData.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-100 p-4 flex items-center justify-between rounded-xl shadow-sm"
                >
                  <span className="text-gray-800">{item.name}</span>
                  <div className="flex space-x-6">
                    <button className="text-green-500 hover:text-green-700 transition duration-200">
                      <MdAddCircle size={24} />
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-200"
                    >
                      <MdDeleteForever size={24} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 px-4 py-2 text-white font-bold rounded-lg mt-4 hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
