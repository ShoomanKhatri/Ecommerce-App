import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/herosection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';

function Home() {
 
  return (
    <Layout>
      {/* <Navbar /> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
      
    </Layout>
  )
}

export default Home;