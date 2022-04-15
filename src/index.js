import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header'
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import Highlights from './Component/Highlights';
import BestSeller from './Component/BestSeller';
import ShoesSection from './Component/ShoesSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Highlights />
    <BestSeller />
    <ShoesSection />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
