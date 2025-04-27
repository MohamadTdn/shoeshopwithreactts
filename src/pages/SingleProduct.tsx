import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProductInfo from '../components/ProductInfo/ProductInfo'

export default function SingleProduct() : React.JSX.Element {
  return (
    <div>
      <Header/>
      <ProductInfo/>
      <Footer/>
    </div>
  )
}
