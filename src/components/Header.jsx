import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import { useStateValue } from "../provider/StateProvider";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";
import { actionType } from "../provider/reducer";

const auth = getAuth(firebaseApp);

const Header = () => {
  const [{ user, cartItems, displayCart }, dispatch] = useStateValue();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        //
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const funcDisCart = () => {
    dispatch({
      type: actionType.SET_DIS_CART,
      displayCart: !displayCart,
    });
  };

  return (
    <header className="sticky top-0 ">
      {/* Desktop View */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">RapidCravings</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-10">
            <Link to="/">
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
            </Link>
            <Link to='/'>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menus
              </li>
            </Link>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Contact
            </li>
          </ul>

          <div
            className="relative flex items-center justify-center mr-5 cursor-pointer"
            onClick={funcDisCart}
          >
            <MdShoppingCart className="text-textColor text-2xl" />

            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex          items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems?.length}
              </p>
            </div>
          </div>

          {user ? (
            <div className="flex items-center justify-center gap-3">
              <motion.img
                src={avatar}
                whileTap={{ scale: 0.6 }}
                onClick={handleLogOut}
                className="w-8 min-w-[20px] h-8 min-h-[20px] drop-shadow-xl cursor-pointer rounded-full"
              />
              <p className="-ml-2 text-md text-textColor ">
                {user.displayName}
              </p>
            </div>
          ) : (
            <Link to="/login">
              <motion.img
                src={avatar}
                whileTap={{ scale: 0.6 }}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">RapidCravings</p>
        </Link>

        <ul className="flex items-center gap-5">
          <li className="text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menus
          </li>
          <li className="text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="relative flex items-center justify-center"
        onClick={funcDisCart}
        >
          <MdShoppingCart className="text-textColor text-xl cursor-pointer" />
          <div className=" absolute -top-0.5 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex          items-center justify-center">
            <p className="text-xs text-white font-semibold">
              {cartItems?.length}
            </p>
          </div>
        </div>

        {user ? (
          <div className="flex items-center justify-center gap-3">
            <motion.img
              src={avatar}
              whileTap={{ scale: 0.6 }}
              onClick={handleLogOut}
              className="w-8 min-w-[20px] h-8 min-h-[20px] drop-shadow-xl cursor-pointer rounded-full"
            />
            <p className="-ml-2">{user.displayName}</p>
          </div>
        ) : (
          <Link to="/login">
            <motion.img
              src={avatar}
              whileTap={{ scale: 0.6 }}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
