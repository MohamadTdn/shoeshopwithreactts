import React from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

export default function Reviews(): React.JSX.Element {
  return (
    <div className="container flex flex-col pt-5">
      <div className="flex flex-col md:flex-row justify-evenly">
        <Review
          profileImg="/images/review-item1.jpg"
          username="Mina Brown"
          date={new Date()}
          body="Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis"
        />
        <Review
          profileImg="/images/review-item2.jpg"
          username="Jenny Rose "
          date={new Date()}
          body="Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis"
        />
      </div>
      <ReviewForm/>
    </div>
  );
}
