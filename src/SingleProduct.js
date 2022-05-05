import Product from "./Component/Product";
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Breadcum from "./Component/Breadcum";
import React ,{useState ,useEffect}from 'react';
import { useParams } from 'react-router';

import {useSelector , useDispatch} from 'react-redux'
import {addCart} from './redux/action';


export default function SingleProduct(){
    

    const {id} =useParams();
    const [product, setProduct] = useState([]);
    const [loading ,setLoading] = useState(false);
    
const dispatch = useDispatch();
const addProduct = (product)=>{
dispatch(addCart(product));
}

    useEffect(()=>{
          const getProduct = async ()=>{
              setLoading(true);
              const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                  setProduct(await response.json());
                  setLoading(false);
              }
          getProduct();
      },[]);
      const Loading =()=>{
        return(
            <>
             <Load>Loading ....</Load>
            </>
        )
    };   

    const [incr,setIncr] = useState(0)
    const inc = () =>{
        if(incr > 0){
            setIncr(incr - 1);
        }else{
            setIncr(0)
        }
    };
    const dec = () =>{
            setIncr(incr + 1);
    };

    const ShowProduct =() =>{
    return(
        <>
      <Breadcum />
        <Productsection>
            <div>
                <Aboutproduct>
                    <div>  
                        <img src={product.image}/>
                        <ul>
                            <li><img src="./Images/Product-Picture02.png" /></li>
                            <li><img src="./Images/Product-Picture02.png" /></li>
                            <li><img src="./Images/Product-Picture02.png" /></li>
                            <li><img src="./Images/Product-Picture02.png" /></li>
                        </ul>
                    </div>
                    <div>
                        <h1>{product.title}</h1>
                    <ul>
                        <li>
                            <Stars>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiOutlineStar /></li>
                            </Stars>
                    </li>
                    <li> Rating { product.rating && product.rating.rate}</li>
                    <li>Submit a review</li>
                    </ul>
                    <hr />
                    <Lists>
                        <li>${product.price}</li>
                        <li>$534,33</li>
                        <li>24% Off</li>
                    </Lists>
                    <tabel>
                        <tr>
                            <td>Availability:</td>
                            <td>In stock</td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <td>Free shipping</td>
                            <td> </td>
                        </tr>
                    </tabel>
                    <hr />
                    <tabel>
                        <tr>
                            <td>Select Color </td>
                            <td> 
                                <Colors>
                                    <li><GoPrimitiveDot /></li>
                                    <li><GoPrimitiveDot /></li>
                                    <li><GoPrimitiveDot /></li>
                                    <li><GoPrimitiveDot /></li>
                                </Colors>
                         </td>
                        </tr>
                        <tr>
                            <td>Size </td>
                            <td>
                            <select name="sort">
                                <option value="xs">XS</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                            </select>
                            </td>
                        </tr>
                    </tabel>
                    <hr />
                    <ul className="addtocart">
                        <li>
                            <button onClick={inc}>-</button> {incr} <button onClick={dec}>+</button>
                        </li>
                        <li>
                            <button onClick={()=> addProduct(product)} className="cartbtn">Add to cart </button>
                            <AiOutlineHeart /></li>
                    </ul>
                   
                    <Sharebtn>
                        <li><Link to="/" >Share on facebook</Link></li>
                        <li><Link to="/">Share on twiter</Link></li>
                    </Sharebtn>
                    
                    
                    </div>
                </Aboutproduct>
                <h1>Description</h1>
                    <p>{product.description}</p>
            </div>
            <div className="bestseller">
                <h1>Best Seller</h1>
                <Product title="title 1"/>
                <Product title="title 1"/>
            </div>
        </Productsection>
       <Relativeproduct>
       <h1> RELATED PRODUCTS </h1>
        <ul>
            <li><Product title="title 1"/></li>
            <li><Product title="title 1"/></li>
            <li><Product title="title 1"/></li>
            <li><Product title="title 1"/></li>
        </ul>
       </Relativeproduct>
        </>
    )
    }
    return(
        <>
        {loading ? <Loading/> : <ShowProduct/>}    
    </>
    )
}

// styled compoenent 
const Load =styled.div`
text-align:center;
`;
const Productsection = styled.section`
max-width:1200px;
margin:auto;
display: grid;
grid-template-columns: 3fr 1fr;
@media (max-width:450px){
    grid-template-columns: 1fr;
}
.bestseller{
    @media (max-width:450px){
        display:none;
    }
}
`;
const Aboutproduct = styled.div`
    display:flex;
    @media (max-width:768px){
        flex-wrap: wrap;
    }
    div:nth-child(1){
        padding: 12px;
        width: 100%;
        @media (max-width:768px){
            width: 100%!important;
            padding: 15px;
        }
    }
    div:nth-child(1) img{
        width:100%;
    }
    div:nth-child(2) {
    width: 100%;
    padding: 24px;
    }
    ul{
    display: flex;
    gap: 10px;
    align-items: center;
    list-style:none;
    flex-wrap: wrap;
    }
    div:nth-child(1) ul{
        justify-content: space-evenly;
            margin-top: 100px;
    }
    td {
        height: 40px;
        width: 150px;
    }
    select {
    margin: 0px 10px;
    padding: 12px 20px;
    background: none;
    border-color: #00000014;
    }
    hr {
        border: 1px solid #F6F7F8;
        width: 100%;
        margin: 20px 0px;
    }
    h1{
        font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #22262A;
    }
    .addtocart{
        justify-content:space-between;
        margin: 30px 0px;
    }
    .addtocart li:nth-child(1){
        background: #F6F7F8;
    }
    .cartbtn {
    background: #33A0FF!important;
    color: #fff;
    padding: 12px 20px !important;
    display: inline-block;
    margin: 0px 10px;
    font-size: 18px!important;
    cursor: pointer;

    }
    .addtocart li {
    align-items: center;
    display: flex;
    }
    .addtocart li:nth-child(2) svg{
            background: #33A0FF;
    color: #fff;
    font-size: 49px;
    padding: 12px;
    }
    .addtocart button{
    padding: 20px;
    background: none;
    border: none;
    font-size: 24px;
    }
`;
const Stars = styled.ul`
    display: flex;
    justify-content: flex-start;
    list-style: none;
    gap: 5px;
    li{
      color:#FFC600;
    } 
`;
const Lists = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  gap:5px;

  li{
  font-family: 'Poppins';
  font-style: normal;
  letter-spacing: 0.5px;
  }
  li:nth-child(1){
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  }
  li:nth-child(2) {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-decoration-line: line-through;
  color: #9098B1;
    }
    li:nth-child(3) {
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #FB7181;
}
`;
const Colors = styled.ol`
    display:flex;
    list-style: none;
    gap:5px;
    svg {
        font-size: 30px;
    }
    li:nth-child(1){
        color:#006CFF;
    }
    li:nth-child(1) svg{
        border: 2px solid;
        border-radius: 50%;
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
const Relativeproduct = styled.div`
    h1{
        text-align:center;
    }
    ul{
        display:flex;
        justify-content:center;
        list-style:none;
        gap:10px;
        flex-wrap: wrap;
    }
`;
const Sharebtn = styled.ul`
    display: flex;
    justify-content: space-between;
    li{
    flex: 1;
    /* background:${(props) => props.backgroundColor}; */
    }
   a{
    text-align: center;
    display: inline-block;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    
    width: 100%;
    padding: 20px;
   }
   li:nth-child(1) a{
    background: #385C8E;
   }
   li:nth-child(2) a{
    background: #03A9F4;
   }

`;