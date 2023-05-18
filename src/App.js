
import './App.css';
import React, { useState } from "react";
//import Category from './components/category';
import { getCategories } from './fetcher';
import Layout from './components/layout';
import ProductDetail from './components/productDetails';
import Cart from './components/basket';
import Checkout from './components/checkout';
import OrderConfirmation from './components/orderconfirmation';
import {
  BrowserRouter,Routes,Route} from "react-router-dom";
import Category from './components/category';
import Home from './components/home';
import Search from './components/search';
import SearchResults from './components/searchResult';

function App() {
  const [categories,setCategories]=useState({errMessage: '',data: []});
  React.useEffect(() => {
    const fetchData=async() =>
    {
      const  responseObject=  await getCategories();
      setCategories(responseObject);
    }
    fetchData();
   
   
    
    
}, [])




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories}/>}>
          <Route index  element={<Home/>}/>
          <Route path="basket" element={<Cart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path='orderconfirmation' element={<OrderConfirmation/>}/>
          <Route path='search' element={<SearchResults/>}/>
          <Route path="products/:productId" element={<ProductDetail/>}/>
          <Route path="categories/:categoryId" element={<Category/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
    
  );
}

export default App;
