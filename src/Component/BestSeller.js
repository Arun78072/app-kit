import styled from 'styled-components';
import Products from './Allproduct';
import {NavLink } from "react-router-dom";


export default function BestSeller() {
    return (
        <>
                <Bestsellerr>
                    <h1>Best Seller</h1>
                </Bestsellerr>
                <Products />
               

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
`;
