import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import AllProducts from "../components/AllProducts/AllProducts";

export default function Shop(): React.JSX.Element {
  return (
    <div>
      <Header />
      <PageHeader Page="SHOP" route1="Home" route2="Shop" />
      <AllProducts/>
      <Footer />
    </div>
  );
}
