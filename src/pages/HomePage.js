import React, { useEffect } from 'react'
import { Navbar, Footer } from "../components";
import { Banner, LearnMore, Popular, Products, Testimonials } from '../container';
import { useProductsContext } from '../context/products_context';
import { products_url } from '../Utils/constatns';


const HomePage = () => {
  const { fetchProducts, products } = useProductsContext()

  useEffect(() => {
    fetchProducts(`${products_url}${0}/${1}`)
  }, []);

  return (
    <main  >
      {/* <div> */}
      <Banner />
      <Products />
      <LearnMore />
      <Testimonials />
      <Popular />
      {/* <Footer /> */}
      {/* </div> */}
    </main>
  )
}

export default HomePage