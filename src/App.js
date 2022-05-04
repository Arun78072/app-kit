import * as React from "react";
import { Switch, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Product from './ProductPage'
import Header from './Component/Header'
import Footer from './Component/Footer';
import Belt from "./Belt";
import SingleProduct from "./SingleProduct";
import Addtocart from "./Addtocart";
import Payment from './Payment'
import Payment2 from './Payment2'
import Payment3 from './Payment3'
import Cart from "./Component/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/belt" element={<Belt/>} />
          <Route path="/:id" element={<SingleProduct/>} />
          <Route path='/addtocart' element={<Addtocart />} />
          <Route path='/payment' element={<Payment />}/>
          <Route path='/payment2' element={<Payment2 />}/>
          <Route path='/payment3' element={<Payment3 />}/>
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <hr />
      <Outlet />
    </div>
  );
}



export default App;
