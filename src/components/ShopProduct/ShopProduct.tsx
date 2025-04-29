import React from 'react'
import { ProductProps } from '../Product/Product.types'

export default function ShopProduct({
  title,
  img,
  price,
}: ProductProps) : React.JSX.Element {
  return (
    <div className="product">
    <img src={`${img}`} className='md:w-[400px]' alt="" />
    <div className="flex justify-between pt-4">
      <h5>{title}</h5>
      <h5 className="font-bold">{price}$</h5>
    </div>
  </div>
  )
}
