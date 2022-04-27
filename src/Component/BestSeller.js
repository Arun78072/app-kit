import styled from 'styled-components';
import All from './Allproduct';
import { Routes, Route, Outlet, NavLink } from "react-router-dom";


export default function BestSeller() {
    return (
        <>
                <Bestsellerr>
                    <h1>Best Seller</h1>
                    <ul>
                        <li><NavLink to='/all'>All</NavLink></li>
                        <li><NavLink to='/'>Bags</NavLink></li>
                        <li><NavLink to='/'>Sneakers</NavLink></li>
                        <li><NavLink to='/belts'>Belt</NavLink></li>
                        <li><NavLink to='/'>Sunglasses</NavLink></li>
                    </ul>


                </Bestsellerr>
                <All />
               

        </>
    )
}


// Styled cpomponent 

const Bestsellerr = styled.div`
h1 {
  padding-bottom: 40px;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  color: #22262A;
}
ul{
    display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  flex-wrap: wrap;
}
li {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
}
`;
