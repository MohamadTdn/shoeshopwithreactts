import React, { useState } from "react";
import Desc from "../Desc/Desc";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";

export default function ProductInfo(): React.JSX.Element {
  const [infos, setInfos] = useState<string>("desc");

  return (
    <section className="py-15">
      <div className="container">
        <div className="flex flex-col md:flex-row p-5 gap-x-9">
          <div>
            <img
              className="w-100 md:w-300"
              src="/public/images/card-item7 (1).jpg"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Nike Shoes</h1>
            <h4 className="text-xl">$99</h4>
            <p className="md:w-[100%] sm:w-[50%] w-[30%] text-gray-400 text-xl">
              This Shoes is comfortable for wearing for men. imperdiet nulla
              molestie ac vulputate scelerisque amet. Bibendum adipiscing platea
              blandit sit sed quam semper rhoncus. Diam ultrices maecenas
              consequat eu tortor orci.
            </p>
            <div>
              <h5 className="text-2xl font-bold underline">Color : </h5>
              <ul className="flex gap-x-3 pt-3">
                <li>
                  <div className="h-6 w-6 rounded-full bg-green-700"></div>
                </li>
                <li>
                  <div className="h-6 w-6 rounded-full bg-orange-700"></div>
                </li>
                <li>
                  <div className="h-6 w-6 rounded-full bg-red-700"></div>
                </li>
                <li>
                  <div className="h-6 w-6 rounded-full bg-black"></div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-2xl underline">Size : </h4>
              <ul className="flex gap-x-3 pt-3">
                <li>XL</li>
                <li>L</li>
                <li>M</li>
                <li>S</li>
              </ul>
            </div>

            <input
              type="number"
              value={1}
              className="w-10 border border-black my-2"
            />
            <div className="flex gap-x-4">
              <button className="p-2 bg-black text-white hover:bg-red-500 cursor-pointer transition-all">
                Buy Now
              </button>
              <button className="p-2 border border-black hover:bg-red-500 cursor-pointer transition-all">
                Add To Cart
              </button>
            </div>
            <div className="flex gap-x-2 items-center">
              <span className="text-2xl font-bold underline">Category</span>
              <span>Men, Casual</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <span className="text-2xl font-bold underline">Tags</span>
              <span>Classic, Modern</span>
            </div>
          </div>
        </div>

        <ul className="flex gap-x-8 justify-start md:justify-center my-8">
          <li
            onClick={() => setInfos("desc")}
            className={`hover:border-b-2 transition-all ${
              infos === "desc" ? "active" : ""
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setInfos("info")}
            className={`hover:border-b-2 transition-all ${
              infos === "info" ? "active" : ""
            }`}
          >
            Product Info
          </li>
          <li
            onClick={() => setInfos("reviews")}
            className={`hover:border-b-2 transition-all ${
              infos === "reviews" ? "active" : ""
            }`}
          >
            Reviews
          </li>
        </ul>
        <div>
          {infos === "desc" ? (
            <Desc />
          ) : infos === "info" ? (
            <Info />
          ) : infos === "reviews" ? (
            <Reviews />
          ) : null}
        </div>
      </div>
    </section>
  );
}
