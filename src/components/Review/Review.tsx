import React from "react";
import { ReviewProps } from "./Review.types";

export default function Review({
  profileImg,
  username,
  date,
  body,
}: ReviewProps): React.JSX.Element {
  return (
    <div className="review flex flex-col md:flex-row">
      <div>
        <img className="md:h-25 rounded-full" src={profileImg} alt="" />
      </div>
      <div className="p-4">
        <h5>
          {username} - {date.toLocaleDateString()}
        </h5>
        <p className="sm:w-[50%] md:w-[100%] w-[30%]">{body}</p>
      </div>
    </div>
  );
}
