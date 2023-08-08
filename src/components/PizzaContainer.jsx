import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProductContainer from "./ProductContainer";
import { pizzaData } from "../data/pizzaData";

const PizzaContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);

  return (
    <section className="w-full mt-12">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-[#34d399] to-[#10b981] transition-all ease-in-out duration-100">
          Pizzas
        </p>
      </div>

      {/* display products */}
      <ProductContainer
        scrollValue={scrollValue}
        flag={true}
        data={pizzaData}
      />
    </section>
  );
};

export default PizzaContainer;
