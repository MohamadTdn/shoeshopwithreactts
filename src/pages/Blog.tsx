import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Articles from '../components/Articles/Articles'

export default function Blog() : React.JSX.Element {
  return (
    <div>
      <Header/>
      <PageHeader Page='Blog' route1='Home' route2='Blog' />
      <Articles/>
      <Footer/>
    </div>
  )
}
