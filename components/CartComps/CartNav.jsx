import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

const CartNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const { totalQuantity } = useContext(CartContext);

  const [date, setDate] = useState();
  const router = useRouter();

  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleSignOut() {
    signOut();
  }
  return (
    <div className="px-4 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto ">
      <div className="hidden lg:block">
        <div className=" mx-auto   my-auto h-20 flex  justify-between items-center">
          <Link href={"/store"}>
            <Image
              src={"/assets/images/landing/loop.svg"}
              alt="loop"
              width={74}
              height={32}
            />
          </Link>
          <div className="flex gap-12">
            <Link href={"/manageCards"}>
              <p className="text-sm leading-[17px] w-[110px]  hover:font-bold">
                Manage cards
              </p>
            </Link>
            <Link href={"/order-history"}>
              <p className="text-sm leading-[17px] w-[110px]  hover:font-bold">
                Order history
              </p>
            </Link>
            <Link href={"/store"}>
              <p className="text-sm leading-[17px] w-[80px]  hover:font-bold">
                Store
              </p>
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            <Link href={"/profile"}>
              <div className="relative hover:scale-110">
                <Image
                  src={"/assets/images/profileIcon.png"}
                  alt="loop"
                  width={30}
                  height={30}
                />
              </div>
            </Link>
            {totalQuantity ? <Link href={totalQuantity > 0 ? "/cart" : "/store"} className="relative hover:scale-110">
              <Image
                src={"/assets/images/cart-images/CartImage.png"}
                alt="loop"
                width={30}
                height={30}
              />
              <span className="absolute rounded-full border w-6 text-center  h-6 top-[-15px] right-[-23px] font-medium text-black text-md">
                {totalQuantity}
              </span>
            </Link> : <Link href={"/store"} className="relative hover:scale-110">
              <Image
                src={"/assets/images/cart-images/CartImage.png"}
                alt="loop"
                width={30}
                height={30}
              />

            </Link>}
            <button
              className={` h-10 w-[165px] text-[16px] font-bold text-white  rounded-[10px] ${isHovered
                ? "bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] text-black"
                : "bg-black text-white"
                }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleSignOut}
              name="log out"
            >
              LOG OUT
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="lg:hidden ">
        <nav className="bg-dark px-2 pr-1 sm:px-4 py-2.5  w-full z-50 top-0 left-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <Image
                src={"/assets/images/landing/loops.png"}
                alt="loop"
                width={50}
                height={22}
              />
            </a>
            <div className="flex gap-8">
              {/* <div className="relative flex">
                <Image
                  src={"/assets/images/cart-images/CartImage.png"}
                  alt="loop"
                  width={25}
                  height={25}
                />
                <span className="absolute rounded-full border w-5 text-center  h-5 top-[-15px] right-[-10px] font-medium text-black text-md">
                  {totalQuantity}
                </span>
              </div> */}
              {totalQuantity ? <Link href={totalQuantity > 0 ? "/cart" : "/store"} className="relative flex">
                <Image
                  src={"/assets/images/cart-images/CartImage.png"}
                  alt="loop"
                  width={23}
                  height={23}
                />
                <span className="absolute rounded-full border w-5 text-center  h-5 top-[-15px] right-[-10px] font-medium text-black text-md">
                  {totalQuantity}
                </span>
              </Link> : <Link href={"/store"} className="relative hover:scale-110">
                <Image
                  src={"/assets/images/cart-images/CartImage.png"}
                  alt="loop"
                  width={23}
                  height={23}
                />

              </Link>}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mobileNavbar inline-flex relative z-[100] items-center "
                name="isOpen"
              >
                <div className={`{} h-3.5 w-5 ${isOpen ? "fixed" : ""}`}>
                  <div
                    className={` h-0.5 bg-black w-5 origin-top-left ease-in duration-200 rounded-md ${isOpen ? "rotate-45 translate-x-px" : "rotate-0"
                      }`}
                  />
                  <div
                    className={` h-0.5 w-5 bg-black ease-in duration-200 rounded-md mt-1 ${isOpen ? "hidden" : "block"
                      }`}
                  />
                  <div
                    className={` h-0.5 w-5 bg-black ease-in duration-200  rounded-md mt-1  ${isOpen ? "-rotate-45 -translate-x-0.5 " : "rotate-0 "
                      }`}
                  />
                </div>
              </button>
              {isOpen && (
                <AnimatePresence>
                  <motion.div
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    viewport={{ once: false }}
                    className="fixed ease-in duration-800  w-full h-screen top-0 right-0   shadow-lg bg-white text-black z-50"
                  >
                    <div className=" w-full h-full bg-white">
                      <div className="flex flex-col h-full  content-between">
                        <div className="flex flex-col mx-auto mt-20 justify-center items-center text-center font-oswald tracking-light w-10/12 z-20 h-4/5">
                          <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="nav-link-container  py-2  border-b-2 border-white "
                          >
                            <Link href="/manageCards" className="nav-link ">
                              Manage cards
                            </Link>
                          </div>
                          <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="nav-link-container py-4  border-b-2 border-white"
                          >
                            <Link href="/order-history" className="nav-link ">
                              Order history
                            </Link>
                          </div>

                          <div className="mb-5">
                            <Link href={"/profile"}>
                              {/* <Image
                                src={"/assets/images/profileIcon.png"}
                                alt="loop"
                                width={30}
                                height={30}
                              /> */}
                              Profile
                            </Link>
                          </div>

                          <div className="mb-7">
                            <Link href={"/store"}>
                              {/* <Image
                                src={"/assets/images/profileIcon.png"}
                                alt="loop"
                                width={30}
                                height={30}
                              /> */}
                              Store
                            </Link>
                          </div>

                          <div>
                            <button
                              onClick={handleSignOut}
                              className="w-[140px] h-10 bg-black text-white text-sm  my-auto font-bold rounded-[10px] text-center"
                              name="log out"
                            >
                              LOG OUT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CartNav;
