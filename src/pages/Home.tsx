import React from 'react'
import Header from '../components/Header/Header'
import Banners from '../components/Banners/Banners'
import Discount from '../components/Discount/Discount'
import Products from '../components/Products/Products'
import Comercials from '../components/Comercials/Comercials'
import Latest from '../components/Latest/Latest'
import Footer from '../components/Footer/Footer'

export default function Home() : React.JSX.Element {
  return (
    <div>
      <Header/>
      <Banners/>
      <Discount/>
      <Products/>
      <Comercials/>
      <Latest/>
      <Footer/>
    </div>
  )
}
