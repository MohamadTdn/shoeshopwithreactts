import React from "react";
import Product from "../Product/Product";

export default function Products(): React.JSX.Element {
  return (
    <div className="px-10 mt-15">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">Featured Products</h3>
        <a className="banner-link" href="#">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 gap-6">
        <Product
          img="/public/images/card-item1.jpg"
          title="Running shoes for men"
          price={99}
        />
        <Product
          img="/public/images/card-item2.jpg"
          title="Running shoes for men"
          price={75}
        />
        <Product
          img="/public/images/card-item3.jpg"
          title="Running shoes for men"
          price={119}
        />
        <Product
          img="/public/images/card-item5.jpg"
          title="Running shoes for men"
          price={80}
        />
        <Product
          img="/public/images/card-item7.jpg"
          title="Running shoes for men"
          price={90}
        />
      </div>
    </div>
  );
}
