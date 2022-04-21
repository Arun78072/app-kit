import styled from 'styled-components'
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
        </>
    )
} 

// Style
const Hotdeal = styled.div`
background-color:#F6F7F8;
padding:20px;
margin:30px 0px;
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