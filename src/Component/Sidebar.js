import styled from 'styled-components'
import { GoPrimitiveDot } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
    return(
        <>
        <Hotdeal>
            <h1>Hot Deals</h1>
            <ul>
                <li>Nike</li>
                <li>28</li>
            </ul>
            <ul>
                <li>Airmax</li>
                <li>20</li>
            </ul>
            <ul>
                <li>Nike</li>
                <li>36</li>
            </ul>
            <ul>
                <li>Adidas</li>
                <li>28</li>
            </ul>
            <ul>
                <li>Vans</li>
                <li>27</li>
            </ul>
            <ul>
                <li>Nike</li>
                <li>22</li>
            </ul>
        </Hotdeal>
        <Hotdeal>
            <h1>Price</h1>
            <ul>
                <li>Range</li>
                <li className='range'>$13.99 - $25.99</li>
            </ul>
            <input type="range" min="0" max="10" />
        </Hotdeal>
        <Hotdeal>
            <h1>Color</h1>
            <Colors>
                <li><GoPrimitiveDot /></li>
                <li><GoPrimitiveDot /></li>
                <li><GoPrimitiveDot /></li>
                <li><GoPrimitiveDot /></li>
                <li><GoPrimitiveDot /></li>
                <li><GoPrimitiveDot /></li>
                </Colors>  
        </Hotdeal>
        <Hotdeal>
            <h1>Brand</h1>
            <ul>
                <li>Nike</li>
                <li>28</li>
            </ul>
            <ul>
                <li>Airmax</li>
                <li>20</li>
            </ul>
            <ul>
                <li>Nike</li>
                <li>36</li>
            </ul>
            <ul>
                <li>Adidas</li>
                <li>28</li>
            </ul>
            <ul>
                <li>Vans</li>
                <li>27</li>
            </ul>
            <ul>
                <li>Nike</li>
                <li>22</li>
            </ul>
        </Hotdeal>
        <Menubtn>
                <NavLink to="/">MORE</NavLink>
        </Menubtn>
        </>
    )
} 

// Style
const Hotdeal = styled.div`
background-color:#F6F7F8;
padding:20px;
margin:30px 0px;
border-radius:5px;
h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #22262A;
margin: 20px 0px;
}
ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style: none;
    margin: 14px 0px;
}

li{
    font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #262626;
}
ul > li:last-child{
    opacity: 0.35;
    }
li.range{
    opacity:1 !important;
}
input[type="range"] {
    width: 100%;
}
`;
const Colors = styled.ol`
    display:flex;
    list-style: none;
    justify-content: space-between;
li {
    font-size: 30px;
}
li:nth-child(1){
    color:#006CFF;
    border:1px solid #006CFF;
    border-radius:50%;
}
li:nth-child(2){
    color:#FC3E39;
}
li:nth-child(3){
    color:#171717;
}
li:nth-child(4){
    color:#FFF600;
}
li:nth-child(5){
    color:#FF00B4;
}
li:nth-child(6){
    color:#EFDFDF;
}
`;
const Menubtn = styled.div`
background-color:#F6F7F8;
margin:30px 0px;
border-radius:5px;

a{
    padding: 20px 0px;
    text-align: center;
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #262626;
}
`;