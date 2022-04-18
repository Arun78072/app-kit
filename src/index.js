import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header'
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import BestSeller from './Component/BestSeller';
import ShoesSection from './Component/ShoesSection';
import Shipping from './Component/Shipping';
import News from './Component/News';
import Feature from './Component/Feature';
import Newsletter from './Component/Newsletter';
import Highlights from './Component/Highlights';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Highlights />
    <BestSeller />
    <ShoesSection />
    <Shipping />
    <News />
    <Feature />
    <Newsletter />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
