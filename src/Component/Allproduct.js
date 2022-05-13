import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
const Products =()=>{
  useEffect(() => {
    AOS.init({
        duration : 2000
    });
    AOS.refresh();
  }, []);


  const[data, setData] = useState([]);
  const[filter, setFilter] = useState(data);
  const[loading, setLoading]= useState(false);
  let componentMounted= true;
  useEffect(()=>{
      const getProduct = async ()=>{
          setLoading(true);
          const response = await fetch("https://fakestoreapi.com/products");
          if(componentMounted){
              setData(await response.clone().json());
              setFilter(await response.json());
              setLoading(false);
              console.log(filter)
          }
          return()=>{
              componentMounted =false;
          }
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
  const filterProduct=(cat)=>{
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }
  const ShowProduct =() =>{
      return(
          <>
                <Bestsellerr>
                    <h1>Best Seller</h1>
                </Bestsellerr>
          <Btns>
            <button onClick={()=>setFilter(data)}> All </button>
            <button onClick={()=>filterProduct("men's clothing")}> Men </button>
            <button onClick={()=>filterProduct("women's clothing")}> Women </button>
            <button onClick={()=>filterProduct("jewelery")}> Jewelery </button>
            <button onClick={()=>filterProduct("electronics")}> Electronics</button>
          </Btns>
       <Mainsec>
       {filter.map((product)=>{
              return(
                  <>
                  <li data-aos="zoom-in">
                    <Pro>
                    <Onhover>
                      <img src={product.image}/>
                      <div>
                        <Link to="/"><AiOutlineHeart /></Link>
                        <Link to={`/${product.id}`}><AiOutlineShoppingCart /></Link>
                      </div>
                    </Onhover>
                    <NavLink to={`/${product.id}`}><h1>{product.title}</h1></NavLink>
                    <Star>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiOutlineStar /></li>
                    </Star>
                    <List>
                        <li>${product.price}</li>
                        <li>$534,33</li>
                        <li>24% Off</li>
                    </List>
                    </Pro>
                  </li>
                  </>
              )
          })}
       </Mainsec>
          </>
      )
  }
  return(
      <>
          <div>
              {loading ? <Loading/> : <ShowProduct/>}
          </div>
          <Appbtn>
                    <a href="/">Load More</a>
          </Appbtn>
      </>
  )
}
export default Products;

//style
const Bestsellerr = styled.div`
  margin-top: 60px;
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
const Load =styled.div`
text-align:center;
`;
const Btns = styled.div`
  text-align: center;
  margin-bottom:50px;
  button {
  cursor: pointer;
  color: var(--blue);
  font-size: 18px;
  font-weight: 500;
  padding: 0px 10px;
  margin: 0px 8px;
  border: none;
  background: none;
  }
`;

const Pro = styled.div`
  border: 3px solid #F6F7F8;
  padding-bottom: 20px;
  border-radius: 5px;
  h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  text-align: center;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #223263;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  height: 50px;
  @media (max-width:786px){
    font-size: 14px;
    height: 46px;
  }
  }
`;
const Onhover = styled.div `
  position:relative;
  text-align: center;
  :hover div{
  visibility: visible;
  }
  div{
  visibility: hidden;
  background-color:#fffffff5;
  display:flex;
  justify-content:center;
  gap:20px;
  align-items:center;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 96%;
  height: 96%;
  }
  img {
  padding:14px;
  width: 230px;
  height: 230px;
  object-fit: contain;
  @media (max-width:786px){
    width: 180px;
    height: 180px;
  }
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
  width: 20px !important;
  }
 `;
const List = styled.ul`
  display: flex;
  justify-content: center !important;
  align-items: center;
  list-style: none;
  gap: 8px;
  li{
  font-family: 'Poppins';
  font-style: normal;
  letter-spacing: 0.5px;
  width: fit-content !important;
  }
  li:nth-child(1){
  font-weight: 700;
  font-size: 18px;
  color: #40BFFF;
  @media (max-width:786px){
    font-size: 12px;
  }
  }
  li:nth-child(2) {
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: line-through;
  color: #9098B1;
  @media (max-width:786px){
    font-size: 12px;
  }
  }
  li:nth-child(3) {
  font-weight: 700;
  font-size: 14px;
  color: #FB7181;
  @media (max-width:786px){
    font-size: 10px;
  }
  }
`;
const Mainsec = styled.ul` 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  list-style: none;
  gap:10px;
  li {
    width: 280px;
    transition:all 0.5s;
    @media (max-width:786px){
      width: 200px;
    }
  }
  li:hover{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;
const Appbtn = styled.div`
  text-align: center;
  padding: 30px;
  a {
  color: #33A0FF;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  border-bottom: 4px solid #33A0FF;
  }
`;