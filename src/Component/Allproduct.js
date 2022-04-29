import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Products =()=>{
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
          <div>Loading ....</div>
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
                  <li>
                    <Pro>
                    <Onhover>
                      <img src={product.image}/>
                      <div>
                        <Link to="/"><AiOutlineHeart /></Link>
                        <Link to='/'><AiOutlineShoppingCart /></Link>
                      </div>
                    </Onhover>
                    <Link to='/singleproduct'><h1>{product.title}</h1></Link>
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

const Btns = styled.div`
    text-align: center;
    margin-bottom:50px;
  button {
    cursor: pointer;
    color: var(--blue);
    font-size: 22px;
    font-weight: 500;
    padding: 0px 10px;
    margin: 0px 8px;
    border: none;
    background: none;
}
`;

const Pro = styled.div`
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
                    width: 100%;
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
const Mainsec = styled.ul` 
        display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
    list-style: none;
    gap:10px;
    li {
    max-width: 290px;
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