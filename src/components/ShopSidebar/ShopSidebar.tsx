import React from 'react'

export default function ShopSidebar() : React.JSX.Element {
  return (
    <aside className='p-5'>
      <input type="text" placeholder='Search' className='p-2 shadow-xl mb-8' />
      <div className='space-y-6'>
        <ul className='space-y-2'>
          <h5 className='text-2xl font-bold underline'>Categories</h5>
          <li>All</li>
          <li>Men Shoes</li>
          <li>Women Shoes</li>
          <li>Sports Shoes</li>
          <li>Child Shoes</li>
        </ul>
        <ul className='space-y-2'>
          <h5 className='text-2xl font-bold underline'>Brands</h5>
          <li>Nike</li>
          <li>Bata</li>
          <li>Woodland</li>
          <li>Puma</li>
          <li>Adidas</li>
          <li>Reebok</li>
          <li>Liberty</li>
        </ul>
        <ul className='space-y-2'>
          <h5 className='text-2xl font-bold underline'>Filter By Price</h5>
          <li>Less Than 10$</li>
          <li>10$ - 20$</li>
          <li>20$ - 30$</li>
          <li>30$ - 40$</li>
          <li>40$ - 50$</li>
        </ul>
      </div>
    </aside>
  )
}
