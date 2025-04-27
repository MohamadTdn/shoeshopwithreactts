import React from "react";
import ShopProduct from "../ShopProduct/ShopProduct";
import ShopSidebar from "../ShopSidebar/ShopSidebar";

export default function AllProducts(): React.JSX.Element {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="p-5">
        <select className="mb-5">
          <option value="-1">Select Filter</option>
          <option value="cheapest">Pricce Lowest</option>
          <option value="Expensive">Pricce Highest</option>
          <option value="Asc">Pricce A - Z</option>
          <option value="Desc">Price Z - A</option>
        </select>

        <div className="flex flex-wrap gap-5">
          <ShopProduct img="/public/images/card-item1.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item3.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item2.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item5.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item6.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item7.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item8.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item9.jpg" title="Runnig Shoe" price={50}/>
          <ShopProduct img="/public/images/card-item10.jpg" title="Runnig Shoe" price={50}/>
        </div>
      </div>
      <ShopSidebar/>
    </section>
  );
}
