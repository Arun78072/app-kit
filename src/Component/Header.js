import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';




import React from 'react'



export default function Header(){
    return(
        <>
            <div className="container">
                <Top>
                  
                    <div>
                            <ul>
                                <li>EN <IoMdArrowDropdown /></li>
                                <li>USD <IoMdArrowDropdown /></li>
                            </ul>
                    </div>
                    <div>
                        <ul>
                            <li><AiOutlineUser />My Profile</li>
                            <li><AiOutlineShoppingCart /><span>2</span></li>
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
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
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
                            <li><a href="/">Belt</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                        <Hamburger>
                        <BiMenu/>
                        </Hamburger>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

// Style 
const Hamburger = styled.div`

`;
const Top = styled.div`
display: flex;
padding:20px;
  justify-content: space-between;
  align-items: center;
  ul{
    list-style: none;
  display: flex;
  gap: 10px;
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
  left: 10px;
  width: 16px;
  top: -8px;
  text-align: center;
  border-radius: 50%;
  font-weight: 600;
  color: #fff;
}
`;
const Navbar = styled.nav`
  display: flex;
  position:relative;
  justify-content: space-between;
  align-items: center;
  padding:20px 0px;
  flex-wrap:wrap;
  ul{
    list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  }
  li{
    text-transform: uppercase;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  color: #262626;
  padding:0px 15px;
  }
  a{
    transition:all 0.5s;
  }
  a:hover{
    color:#000;
  }
  a:hover Onhover {
    display:none;
  }
`;