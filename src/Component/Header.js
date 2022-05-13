import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
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
                       <Hamburger>
                        <button onClick={toggleNav}><BiMenu/></button>
                        </Hamburger>
                    {(toggleMenu || screenWidth > 768) && (
                        <>
                        <Hambermenu>
                          <ul>
                            <li className='crossicon'>
                            <button onClick={toggleNav}><ImCross/></button>
                            </li>
                            <li><NavLink to="/">Home</NavLink></li>
                             <li className="dropdown">Bags
                             <div className="hovermenu">
                               <section>
                               <div>
                                   <h2>Category</h2>
                                   <ul>
                                       <li> <NavLink to="/">About Us</NavLink></li>
                                       <li><NavLink to="/">Infomation</NavLink></li>
                                       <li><NavLink to="/">Privacy Policy</NavLink></li>
                                       <li><NavLink to="/">Terms & Conditions</NavLink></li>
                                   </ul>
                               </div>
                               <div>
                                   <h2></h2>
                                   <ul>
                                       <li><NavLink to="/">About Us</NavLink></li>
                                       <li><NavLink to="/">Infomation</NavLink></li>
                                       <li><NavLink to="/">Privacy Policy</NavLink></li>
                                       <li><NavLink to="/">Terms & Conditions</NavLink></li>
                                   </ul>
                               </div>
                               <div>
                                   <h2>Category</h2>
                                   <ul>
                                       <li><NavLink to="/">About Us</NavLink></li>
                                       <li><NavLink to="/">Infomation</NavLink></li>
                                       <li><NavLink to="/">Privacy Policy</NavLink></li>
                                       <li><NavLink to="/">Terms & Conditions</NavLink></li>
                                   </ul>
                               </div>
                               <div>
                                   <h2>Category</h2>
                                   <ul>
                                       <li><NavLink to="/">About Us</NavLink></li>
                                       <li><NavLink to="/">Infomation</NavLink></li>
                                       <li><NavLink to="/">Privacy Policy</NavLink></li>
                                       <li><NavLink to="/">Terms & Conditions</NavLink></li>
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
                         </Hambermenu>
                        </>

                       )}
                       
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
    border: none;
    height: 30px;
    background:none;
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
  @media (max-width:786px){
    padding:0px 20px;
  }
  ul{
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width:768px){
    flex-direction: column;
    align-items: flex-start;
    display: block;
    position: fixed;
    right: 0px;
    top: 0px;
    background: black;
    height: 110vh;
    z-index:999;
    overflow: scroll;
    animation : rightup 1s;
  }
  @keyframes rightup {
  0%{
    right:-100px;
  }
  100%{
    right:0px;
  }
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
    @media (max-width:786px){
    padding: 0px 30px;
    border: 1px solid;
    width: 100%;
    border-width: 0px 0px 1px 0px;
    }
  }
  .active{
    color:#40BFFF;
  }
  a:hover Onhover {
    display:none;
  }
`;
const Hambermenu = styled.div`
@media (max-width:786px){
  position: fixed;
  width: 200vh;
  height: 102vh;
  left: 0px;
  background: #000000a6;
  top: 0px;
  z-index: 99;
  }
  li.dropdown{
    color:#004b9f;
    border-color: #262626;
  }
  .crossicon{
    width: 100%;
    text-align: right;
  }
  li.crossicon button {
    background: none;
    color: #fff;
    border: none;
  }
`;
