import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import React,{useState, useEffect} from 'react';
import {useSelector} from 'react-redux';



export default function Header(){
const state= useSelector((state)=> state.handleCart)

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', changeWidth)
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
    }, [])


    return(
        <>
            <div className="container">
                <Top>
                    <div>
                            <ul>
                                <li>
                                  <select name="sort">
                                      <option value="xs">EN</option>
                                      <option value="m">HN</option>
                                      <option value="l">US</option>
                                  </select>
                                </li>
                                <li>
                                  <select name="sort">
                                      <option value="xs">USD</option>
                                      <option value="m">HN</option>
                                      <option value="l">US</option>
                                  </select>  
                                </li>
                            </ul>
                    </div>
                    <div>
                        <ul>
                            <li><AiOutlineUser />My Profile</li>
                            <li className='carticon'> <NavLink to='/cart'><p>Cart</p> <AiOutlineShoppingCart /><span> {state.length}</span> </NavLink></li>
                            <li>Items</li>
                            <li>$00.00</li>
                            <li>< BiSearchAlt2 /></li>
                        </ul>
                    </div>
                </Top>
                <Navbar>
                    <div>
                        <img src="./Images/Logo.png" />
                    </div>
                    <div>
                    {(toggleMenu || screenWidth > 768) && (
                        <>
                          <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                             <li className="dropdown"><a href="/">Bags</a>
                             <div className="hovermenu">
                               <section>
                               <div>
                                   <h2>Category</h2>
                                   <ul>
                                       <li>About Us</li>
                                       <li>Infomation</li>
                                       <li>Privacy Policy</li>
                                       <li>Terms & Conditions</li>
                                   </ul>
                               </div>
                               <div>
                                   <h2></h2>
                                   <ul>
                                       <li>About Us</li>
                                       <li>Infomation</li>
                                       <li>Privacy Policy</li>
                                       <li>Terms & Conditions</li>
                                   </ul>
                               </div>
                               <div>
                                   <h2>Category</h2>
                                   <ul>
                                       <li>About Us</li>
                                       <li>Infomation</li>
                                       <li>Privacy Policy</li>
                                       <li>Terms & Conditions</li>
                                   </ul>
                               </div>
                               <div>
                                   <h2>Category</h2>
                                   <ul>
                                       <li>About Us</li>
                                       <li>Infomation</li>
                                       <li>Privacy Policy</li>
                                       <li>Terms & Conditions</li>
                                   </ul>
                               </div>
                               </section>
                             </div>
                             </li>
                             <li><a href="/">Sneakers</a></li>
                             <li><NavLink to="/product">Product</NavLink></li>
                             <li><NavLink to='/belt'>Belt</NavLink></li>
                             <li><NavLink to="/contact">Contact</NavLink></li>
                         </ul>
                         </>
                       )}
                        <Hamburger>
                        <button onClick={toggleNav}><BiMenu/></button>
                        </Hamburger>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

// Style 
const Hamburger = styled.div`
display:none;
@media (max-width:768px){
    font-size: 36px;
    display: block;
    padding: 0px 20px;
    z-index: 9;
    position: relative;
}
button {
    width: 30px;
    border: 1px solid #000;
    height: 30px;
    border-radius:2px;
}
svg {
    font-size: 24px;
}
`;
const Top = styled.div`
  display: flex;
  padding:20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  ul{
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
  }
  li{
    position: relative;
  display: flex;
  align-items: center;
  }
  span{
  font-size: 12px;
  position: absolute;
  background: var(--red);
  right: -5px;
  width: 16px;
  top: -8px;
  text-align: center;
  border-radius: 50%;
  font-weight: 600;
  color: #fff;
  }
  select, select:focus-visible {
    border: none;
  }
  
.carticon svg{
  font-size:24px;
}
.carticon a {
  display: flex;
  align-items: center;
  color: #000;
}
`;
const Navbar = styled.nav`
  display: flex;
  position:relative;
  justify-content: space-between;
  align-items: center;
  padding:20px;
  flex-wrap:wrap;
  position:relative;
  ul{
    list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width:768px){
      /* display:none; */
    flex-direction: column;
    align-items: flex-start;;
    position: absolute;
    right: 0px;
    top: 0px;
    background: black;
    width: 100%;
    height: 100vh;
    padding: 30px;
  }
  }
  li{
    text-transform: uppercase;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    color: #262626;
    padding:0px 15px;
  }
  .active{
    color:#40BFFF;
  }
  a:hover Onhover {
    display:none;
  }
`;