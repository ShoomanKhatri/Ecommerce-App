import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';

const Order = () => {
  const context = useContext(myContext);
  const { name, rollno } = context;
  return (
    <Layout>
      order
      <h1>Name: {name} </h1>
      <h1>rollno: {rollno} </h1>
    </Layout>
  )
}

export default Order;