import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import RecentBlogPost from "../RecentBlogPost/RecentBlogPost";

export default function BlogSidebar(): React.JSX.Element {
  return (
    <div className="p-5 flex flex-col space-y-8">
      <input type="text" placeholder="Search" className="p-2 shadow-xl mb-8" />
      <div>
        <img
          className="w-80 h-70"
          src="/images/card-item2.jpg"
          alt=""
        />
      </div>
      <div className="md:text-center">
        <h1 className="text-3xl font-bold">Zhang Wei</h1>
        <p className="w-60">
          Photographer and Blogger Nullam vulputate risus vel est porttitor eu
          malesuada neque pulvinar. Nullam vulputate risus vel est porttitor eu
          malesuada neque pulvinar.
        </p>
      </div>
      <div className="socials bg-gray-200 p-7 flex justify-center items-center">
        <div>
          <h5 className="text-2xl font-bold">Follow Us</h5>
          <ul className="flex gap-x-4 pt-4">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaPinterest />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h5 className="text-3xl font-bold">Recent Posts</h5>
        <RecentBlogPost
          img="/images/post-item1.jpg"
          title="Shoes is the first thing to notice"
          date={new Date()}
        />
        <RecentBlogPost
          img="/images/post-item2.jpg"
          title="Shoes is the first thing to notice"
          date={new Date()}
        />
        <RecentBlogPost
          img="/images/post-item3.jpg"
          title="Shoes is the first thing to notice"
          date={new Date()}
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Categories</h3>
        <ul className="flex flex-col gap-y-6">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sports</li>
          <li>Casual</li>
        </ul>
      </div>
      <div>
        <h5 className="text-3xl font-bold">Tags</h5>
        <div>
          <ul className="flex pt-3 gap-x-4">
            <li>Fashion</li>
            <li>Shoes</li>
            <li>Trending</li>
            <li>Casual</li>
          </ul>
          <ul className="flex pt-3 gap-x-4">
            <li>Sports</li>
            <li>White</li>
            <li>Sneakers</li>
            <li>Slippers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
