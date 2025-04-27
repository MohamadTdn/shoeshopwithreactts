import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewForm(): React.JSX.Element {
  return (
    <div className="pt-6">
      <h4 className="text-3xl font-bold">Add A Review</h4>
      <div className="py-4">
        <h5>Your Rating*</h5>
        <div className="flex gap-x-3 *:text-yellow-300">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <form action="#" className="space-y-3">
        <label className="font-bold text-2xl" htmlFor="#">
          Your Review*
        </label>
        <br />
        <textarea
          className="md:w-[100%] w-120 md:h-20 border border-gray-400 my-3"
          placeholder="Add Your Review"
        ></textarea>
        <br />
        <label className="font-bold text-2xl" htmlFor="#">
          Your Name*
        </label>
        <br />
        <input
          className="md:w-[100%] w-120 p-2 border border-gray-400 my-3"
          type="text"
          placeholder="Enter your Name"
        />
        <br />
        <label className="font-bold text-2xl" htmlFor="#">
          Your Email*
        </label>
        <br />
        <input
          className="w-120 md:w-[100%] p-2 border border-gray-400 my-3"
          type="email"
          placeholder="Enter your Email"
        />
        <br />
        <input
          className="bg-black text-white p-2"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
}
