import React from "react";
import HeroSection from "../components/HeroSection";
import BBqContainer from "../components/BBqContainer";
import BurgerContainer from "../components/BurgerContainer";
import PizzaContainer from "../components/PizzaContainer";
import { useStateValue } from "../provider/StateProvider";
import Cart from "../components/Cart";
import Contact from "../components/Contact";

const HomePage = () => {
  const [{ displayCart }] = useStateValue();

  return (
    <div>
      <HeroSection />
      <BBqContainer />
      <BurgerContainer />
      <PizzaContainer />
      <Contact />
      {displayCart && <Cart />}
    </div>
  );
};

export default HomePage;
