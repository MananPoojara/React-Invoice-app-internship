import React, { Profiler, useState } from "react";
import logo from "../assets/invoice2.png";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import moon from "../assets/moon.svg";
import sun from "../assets/sun4.svg";
import profile from "../assets/my.jpeg";

export const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide((state) => !state);
  };

  const transition = {
    type: "spring",
    stiffness: 200,
    dumping: 10,
  };

  return (
    <div>
      {/* // Header */}
      <header>
        <div className="lg:hidden h-[80px] z-50 duration-300 ease-in-out p-4 dark:bg-[#1e2139] bg-[#373b53] flex items-center justify-end">
          {/* Logo Image */}
          <img
            src={logo}
            alt="logo"
            className="h-[80px] absolute left-0 top-0 "
          />

          {/* Right Side */}
          <div className="flex items-center cursor-pointer">
            {/* DarkMode Button */}

            {colorTheme === "light" ? (
              <motion.img
                initial={{
                  scale: 0.6,
                  rotate: 90,
                }}
                animate={{
                  scale: 1,
                  rotate: 360,
                  transition,
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 15,
                }}
                onClick={toggleDarkMode}
                src={moon}
                className="cursor-pointer ml-8 h-6"
              />
            ) : (
              <motion.img
                initial={{
                  rotate: 45,
                }}
                animate={{
                  scale: 1,
                  rotate: 360,
                  transition,
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 15,
                }}
                onClick={toggleDarkMode}
                src={sun}
                className="cursor-pointer ml-8 h-6"
              />
            )}

            <div className="h-[80px] border-dotted border-l border-[#494e6e] mx-6 "></div>
            <div className="relative">
              <img
                src={profile}
                alt="profile"
                className="rounded-full h-[50px]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* sidebar for large */}

      <div className="z-50 hidden lg:block duration-300 ease-in-out">
        <div className="fixed z-50 w-[100px] rounded-2xl flex-col top-0 left-0 h-screen dark:bg-[#1e2139] bg-[#3373b53]">
          <div className="h-full w-full flex flex-col justify-between">
            <img src={logo} alt="logo" className="relative " />
          </div>
        </div>
      </div>
    </div>
  );
};
