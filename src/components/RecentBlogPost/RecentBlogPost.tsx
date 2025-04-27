import React from "react";
import { RecentBlogPostProps } from "./RecentBlogPost.types";

export default function RecentBlogPost({img, title, date}: RecentBlogPostProps): React.JSX.Element {
  return (
    <div className="recent-post flex gap-x-3 pt-4">
      <div>
        <img className="w-30 h-20" src={img} alt="" />
      </div>
      <div>
        <h5 className="text-gray-400">{date.toLocaleDateString()}</h5>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
