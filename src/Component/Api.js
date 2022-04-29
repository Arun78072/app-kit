import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";


export default function Api(){
const [data, setData] = useState([]);
    const  appii = ()=>{
        fetch('https://fakestoreapi.com/products?limit=8')
                .then(res=>res.json())
                .then(json=>{
                    // console.log(json);
                    setData(json);
                });
    };
    useEffect(()=> {
        appii();
    },[])

   
    return(
        <>
        <Mainsec>
        {data.map((item)=>(
            <li>
            <Products>
            <Onhover>
              <img src={item.image}/>
              <div>
                <Link to="/"><AiOutlineHeart /></Link>
                <Link to='/'><AiOutlineShoppingCart /></Link>
              </div>
            </Onhover>
            <Link to='/singleproduct'><h1>{item.title}</h1></Link>
            <Star>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiOutlineStar /></li>
            </Star>
            <List>
                <li>${item.price}</li>
                <li>$534,33</li>
                <li>24% Off</li>
            </List>
            </Products>
        </li>
        ))}
        </Mainsec>
        </>
    )
}
//styled component 
const Mainsec = styled.ul` 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    list-style: none;
    max-width: 1200px;
    margin: auto;
`;
const Products = styled.div`
border: 3px solid #F6F7F8;
  h1 {
    font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  text-align: center;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #223263;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
   height: 60px;
  }
 
`;
const Onhover = styled.div `
  position:relative;
    :hover div{
  /* display:flex; */
  visibility: visible;
    }
    div{
  /* transition:all 0.3s; */
  visibility: hidden;
    /* display:none; */
      background-color:#fffffff5;
      display:flex;
      justify-content:center;
      gap:20px;
      align-items:center;
      position:absolute;
      top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    }
    img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    }
    svg {
    color: #33A0FF;
    border: 2px solid #33a0ff7a;
    padding: 10px;
    font-size: 40px;
    border-radius: 50%;
}
`;
const Star = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 18px;
    li{
      color:#FFC600;
    }
    
`;
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

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

