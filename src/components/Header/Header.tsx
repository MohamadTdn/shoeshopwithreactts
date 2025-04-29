import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="hidden lg:flex justify-between items-center pr-6 pl-6">
        <div>
          <img src="/images/main-logo.png" alt="" />
        </div>
        <div className="flex">
          <ul className="flex *:text-2xl gap-x-6">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a href="#">MEN</a>
            </li>
            <li>
              <a href="#">WOMEN</a>
            </li>
            <li className="relative group">
              <a href="#" className="flex">
                <span>PAGE</span>
                <IoMdArrowDropdown className="mt-2" />
              </a>
              <ul className="submenu invisible opacity-0 absolute shadow-xl space-y-3 p-4 rounded-3xl group-hover:visible group-hover:opacity-100 transition-all z-20 bg-white">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Login/Register</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SALE</a>
            </li>
            <li>
              <a
                href="#"
                className="text-2xl bg-black text-white p-2 rounded-full"
              >
                GET PRO
              </a>
            </li>
            <li>
              <div className="flex gap-x-3 mt-1">
                <FaUser />
                <FaShoppingCart />
                <FaSearch />
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div className="mobile-header flex justify-between items-center lg:hidden pr-6 pl-6">
        <div>
          <img src="/images/main-logo.png" alt="" />
        </div>
        <div className="flex gap-x-5">
          <FaUser />
          <FaShoppingCart />
          <FaSearch />
        </div>
        <div className="hamburger">
          <BiMenuAltRight
            onClick={() => setIsMenuOpen(true)}
            className="text-4xl"
          />
          <div
            className={`mobile-menu fixed ${
              !isMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"
            } top-0 left-0 right-0 min-h-screen z-10 bg-white p-4 transition-all overflow-hidden`}
          >
            <div className="flex justify-between items-center">
              <img src="/images/main-logo.png" alt="" />
              <div>
                <IoMdClose
                  onClick={() => setIsMenuOpen(false)}
                  className="text-6xl"
                />
              </div>
            </div>
            <ul className="mt-8 space-y-6">
              <li className="text-4xl">
                <Link to="/">HOME</Link>
              </li>
              <li className="text-4xl">
                <a href="#">MEN</a>
              </li>
              <li className="text-4xl">
                <a href="#">WOMEN</a>
              </li>
              <li className="text-4xl">
                <a href="#" className="flex">
                  <span>PAGE</span>
                  <IoMdArrowDropdown
                    onClick={() => {
                      if (isSubmenuOpen) {
                        setIsSubmenuOpen(false);
                      } else {
                        setIsSubmenuOpen(true);
                      }
                    }}
                    className="mt-2"
                  />
                </a>
                <ul
                  className={`*:text-xl py-4 space-y-4 transition-all ${
                    !isSubmenuOpen
                      ? "hidden opacity-0 invisible"
                      : "opacity-100 visible"
                  }`}
                >
                  <li className="border-y py-1 border-gray-200">
                    <a href="#">Home</a>
                  </li>
                  <li className="border-y py-1 border-gray-200">
                    <a href="#">Blog</a>
                  </li>
                  <li className="border-y py-1 border-gray-200">
                    <a href="#">Shop</a>
                  </li>
                  <li className="border-y py-1 border-gray-200">
                    <a href="#">Cart</a>
                  </li>
                  <li className="border-y py-1 border-gray-200">
                    <a href="#">Login/Register</a>
                  </li>
                </ul>
              </li>
              <li className="text-4xl">
                <a href="#">SHOP</a>
              </li>
              <li className="text-4xl">
                <a href="#">SALE</a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl bg-black text-white p-2 rounded-full"
                >
                  GET PRO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
