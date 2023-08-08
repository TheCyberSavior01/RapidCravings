import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../provider/StateProvider";
import { actionType } from "../provider/reducer";

const ProductContainer = ({ data, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState(cartItems);

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      className={`w-full flex items-center gap-5 my-2 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0
        ? data.map((item) => (
            <div
              key={item?.id}
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex items-center"
            >
              {/* first part */}
              <div className="w-full flex flex-col items-center">
                <img
                  src={item?.img}
                  alt=""
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* second part */}
              <div className="w-full flex flex-col items-end justify-between -mt-8 gap-3">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.name}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span>{" "}
                    {item?.price}
                  </p>
                </div>

                <motion.button
                  class="bg-gradient-to-br from-[#34d399] to-[#10b981] text-white py-2 px-2 rounded  hover:shadow-lg transition-all ease-in-out duration-100"
                  type="button"
                  whileTap={{ scale: 0.75 }}
                  onClick={() => setItems([...cartItems, item])}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ProductContainer;
