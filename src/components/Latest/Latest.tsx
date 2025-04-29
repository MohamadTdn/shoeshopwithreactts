import React from "react";
import Product from "../Product/Product";

export default function Latest(): React.JSX.Element {
  return (
    <div className="px-10 mt-15">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">Latest Products</h3>
        <a className="banner-link" href="#">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 gap-6">
        <Product
          img="/images/card-item8.jpg"
          title="Running shoes for men"
          price={99}
        />
        <Product
          img="/images/card-item9.jpg"
          title="Running shoes for men"
          price={75}
        />
        <Product
          img="/images/card-item10.jpg"
          title="Running shoes for men"
          price={119}
        />
        <Product
          img="/images/card-item7.jpg"
          title="Running shoes for men"
          price={80}
        />
        <Product
          img="/images/card-item6.jpg"
          title="Running shoes for men"
          price={90}
        />
      </div>
    </div>
  );
}
