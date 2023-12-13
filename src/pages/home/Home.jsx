import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/herosection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';

function Home() {
 const dispatch= useDispatch();
 const cartItem=useSelector((state)=>state.cart);

 console.log(cartItem);
 const addCart=()=>{
  dispatch(addToCart("shirt"));

  const deleteCart=()=>{
    dispatch(deleteFromCart("shirt"));
  } 
 }
  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        {/* <button className='bg-gray-300' onClick={()=> addCart()}>add</button>
        <button  className='bg-gray-300' onClick={()=> deleteCart()}>delete</button> */}
      </div>

      {/* <Navbar /> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
      
    </Layout>
  )
}

export default Home;