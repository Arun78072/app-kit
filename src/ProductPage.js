import styled from 'styled-components'
import ShoesSection from './Component/ShoesSection';
import Product from './Component/Product';
import Sidebar from './Component/Sidebar';
import Pagebar from './Pagebar';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
export default function Products(){
    return(
        <>
        <Pagebar />
        <PageDiv>
            <div className='div1'>
                <Sidebar /> 
            </div>
            <div>
                <ShoesSection /> 
                <Filter>
                <ul>
                    <li>13 Items</li>
                    <li>Sort by 
                    <select name="sort">
                    <option value="volvo">Name</option>
                    <option value="saab">Date</option>
                    <option value="mercedes">Size</option>
                    </select>
                    </li>
                    <li>Show
                    <select name="sort">
                    <option value="volvo">12</option>
                    <option value="saab">10</option>
                    <option value="mercedes">8</option>
                    </select>
                    </li>
                </ul>
                <ul>
                    <li><BsFillGrid3X3GapFill /></li>
                    <li><GiHamburgerMenu /></li>
                </ul>
                </Filter>
 
                <ProductBox className='customepro'>
                    <Product title="title 1"/>
                    <Product title="title 2"/>
                    <Product title="title 3"/>
                    <Product title="title 4"/>
                    <Product title="title 5"/>
                    <Product title="title 6"/>
                    <Product title="title 7"/>
                    <Product title="title 8"/>
                    <Product title="title 9"/>
                    <Product title="title 10"/>
                    <Product title="title 11"/>
                    <Product title="title 12"/>
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
    margin-top: 70px;
    width:100%;
    @media (max-width:768px){
        display:none;
    }
}
.customepro > div{
    width:280px;
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