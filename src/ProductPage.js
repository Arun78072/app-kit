import styled from 'styled-components'
import ShoesSection from './Component/ShoesSection';
import Sidebar from './Component/Sidebar';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Breadcum from './Component/Breadcum';
import Products from './Component/Allproduct';
export default function Product(){
    return(
        <>
        <Breadcum />
        <PageDiv>
            <div className='div1'>
                <Sidebar font="12px" /> 
            </div>
            <div>
                <ShoesSection /> 
                <Filter>
                    <ul>
                        <li>12 Items</li>
                        <li>Sort by 
                        <select name="sort">
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                        <option value="size">Size</option>
                        </select>
                        </li>
                        <li>Show
                        <select name="sort">
                        <option value="12">12</option>
                        <option value="10">10</option>
                        <option value="8">8</option>
                        </select>
                        </li>
                    </ul>
                    <ul>
                        <li><BsFillGrid3X3GapFill /></li>
                        <li><GiHamburgerMenu /></li>
                    </ul>
                </Filter>
 
                <ProductBox className='customepro'>
                    <Products />
                </ProductBox>
                <Numberbar>
                    <NavLink to="/">1</NavLink>
                    <NavLink to="/">2</NavLink>
                    <NavLink to="/">3</NavLink>
                    <NavLink to="/">4</NavLink>
                    <NavLink to="/">5</NavLink>
                 </Numberbar>
            </div>
        </PageDiv>
        
        </>
    )
}

//style

const PageDiv = styled.div`
max-width:1200px;
margin:auto;
display:flex;
justify-content:center;
gap:20px;
.div1{
    width: 100%;
    margin-top: 70px;
    max-width: 300px;
    @media (max-width:768px){
        display:none;
    }
}
.customepro > div{
    /* width:280px; */
}
img{
    width:100%;
}
`;
const ProductBox = styled.div`
    display:flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;
const Numberbar = styled.div`
background-color:#F6F7F8;
margin:30px 0px;
display:flex;
justify-content:center;
gap:5px;
a{
    padding: 20px 26px;
    text-align: center;
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #262626;
}
a:nth-child(3){
    color:#fff;
    background:#40BFFF;
}
`;
const Filter = styled.div`
background-color:#F6F7F8;
padding:8px 20px;
margin:30px 0px;
border-radius:5px;
display:flex;
justify-content:space-between;
ul{
    display:flex;
    list-style: none;
    align-items: center;
    gap: 24px;
}
select {
    margin: 0px 10px;
    padding: 12px 20px;
    background: none;
    border-color: #00000014;
}
svg{
    font-size:20px;
}
`;