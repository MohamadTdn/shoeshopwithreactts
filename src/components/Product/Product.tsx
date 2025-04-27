import React from "react";
import { ProductProps } from "./Product.types";
import { Link } from "react-router-dom";

export default function Product({
  title,
  img,
  price,
}: ProductProps): React.JSX.Element {
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="flex justify-between pt-4">
        <Link to={`/products/1`}>{title}</Link>
        <h5 className="font-bold">{price}$</h5>
      </div>
    </div>
  );
}
