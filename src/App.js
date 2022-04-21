import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Products from './ProductPage'
import Header from './Component/Header'
import Footer from './Component/Footer';
import Belt from "./Belt";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/belt" element={<Belt/>} />
          <Route path="/allbelt" element={<Belt/>} />
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
