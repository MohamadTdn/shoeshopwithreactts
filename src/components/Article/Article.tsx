import React from "react";
import { ArticleProps } from "./Article.types";

export default function Article({
  img,
  category,
  date,
  desc,
  title,
}: ArticleProps): React.JSX.Element {
  return (
    <div className="article-box flex flex-col md:flex-row py-6 gap-x-6">
      <div className="article-image">
        <img src={img} className="md:w-120 md:h-60" alt="" />
      </div>
      <div className="article-data p-4 space-y-5">
        <span className="text-black text-sm font-bold">{category}</span>
        <span className="text-gray-400 ml-3">{date.toLocaleDateString()}</span>
        <h2 className="article-title text-3xl font-bold">{title}</h2>
        <p className="article-desc w-full md:w-[70%] text-gray-400">{desc}</p>
        <a href="#" className="banner-link">
          Read More
        </a>
      </div>
    </div>
  );
}
