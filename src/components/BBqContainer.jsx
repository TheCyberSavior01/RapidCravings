import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProductContainer from "./ProductContainer";
import { bbqData } from "../data/bbqData";

const BBqContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);

  return (
    <section className="w-full mt-12">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-[#34d399] to-[#10b981] transition-all ease-in-out duration-100">
          BBQs
        </p>
        {/* <div className="hidden md:flex gap-3 items-center">
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            onClick={() => setScrollValue(-200)}
          >
            <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={() => setScrollValue(200)}
          >
            <MdChevronRight className="text-lg text-white" />
          </motion.div>
        </div> */}
      </div>

      {/* display products */}
      <ProductContainer scrollValue={scrollValue} flag={true} data={bbqData} />
    </section>
  );
};

export default BBqContainer;
