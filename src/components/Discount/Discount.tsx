import React from "react";

export default function Discount(): React.JSX.Element {
  return (
    <div className="bg-gray-300 w-[90%] py-4 mx-auto flex md:flex-row flex-col justify-center text-center md:text-left md:justify-around items-center mt-10 md:mt-28 gap-y-4">
      <div>
        <h1 className="text-6xl font-bold">10% OFF Discount Coupons</h1>
        <h5 className="pt-3">Subscribe us to get 10% OFF on all the purchases</h5>
      </div>
      <div>
        <button className="bg-black text-white p-2 hover:bg-red-500 transition-all">EMAIL ME</button>
      </div>
    </div>
  );
}
