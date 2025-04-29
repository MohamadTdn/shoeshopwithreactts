import React from "react";
import Article from "../Article/Article";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

export default function Articles(): React.JSX.Element {
  return (
    <div className="container">
      <section className="flex flex-col md:flex-row justify-evenly">
        <div>
          <Article
            img="/images/post-item1.jpg"
            category="FASHION"
            date={new Date()}
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing m blanditiis soluta repellat exercitationem temporibus deleniti ea dolorum quia, qui eligendi molestiae unde molestias facere!"
            title="Running Shoes For Men"
          />

          <Article
            img="/images/post-item2.jpg"
            category="FASHION"
            date={new Date()}
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing m blanditiis soluta repellat exercitationem temporibus deleniti ea dolorum quia, qui eligendi molestiae unde molestias facere!"
            title="Running Shoes For Men"
          />

          <Article
            img="/images/post-item3.jpg"
            category="FASHION"
            date={new Date()}
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing m blanditiis soluta repellat exercitationem temporibus deleniti ea dolorum quia, qui eligendi molestiae unde molestias facere!"
            title="Running Shoes For Men"
          />

          <Article
            img="/images/post-item4.jpg"
            category="FASHION"
            date={new Date()}
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing m blanditiis soluta repellat exercitationem temporibus deleniti ea dolorum quia, qui eligendi molestiae unde molestias facere!"
            title="Running Shoes For Men"
          />
        </div>
        <BlogSidebar />
      </section>
    </div>
  );
}
