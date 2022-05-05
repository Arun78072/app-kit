import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

export default function Highlights(){
  const [data, setData] = useState([]);

    const  appii = ()=>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    console.log(json);
                    setData(json);
                });
    };
    useEffect(()=> {
        appii();
    },[])


    return(
        <Highlightsec>
            <Pro1>
            <img src="./Images/product.png" />
                <h1>FS - QUILTED MAXI<br/> CROSS BAG </h1>
                <List>
                <li>$534,33</li>
                <li>24% Off</li>
            </List>
            <span>$299,43</span>
            </Pro1>
            <Pro2>
            <img src="./Images/product.png" />
            <h1>FS - QUILTED MAXI <br/>CROSS BAG </h1>
                
                <List>
                
                <li>$534,33</li>
                <li>24% Off</li>
            </List>
            <span>$299,43</span>
            </Pro2>
            <Pro3>
            <img src="./Images/product.png" />
            <h1>FS - QUILTED MAXI <br/>CROSS BAG </h1>
            <List>
                            <li>$534,33</li>
                <li>24% Off</li>
            </List>
            <span>$299,43</span>
                
                

            </Pro3>
        </Highlightsec>
    )
}
//  style

const Highlightsec = styled.div`
display:flex;
justify-content:center;
margin-top: -100px;
flex-wrap: wrap;
gap:0px;
h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: #223263;
    position: absolute;
    top: 10px;
    left: 26px;

}
`;
const Pro1 = styled.div`
    padding: 0px 40px;
    border-radius: 5px 0px 0px 5px;
    position: relative;
    background-color: #f6f6f6;
    transition: all 0.5s;
&:hover{
  background-color:#dddddd;
}
&:hover img{
  filter: brightness(0.9);
}
span{
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  bottom: 20px;
  right: 20px;
  position:absolute;
  }
img{
  transition: all 0.5s;
  max-width: 220px;
}
`;
const Pro2 = styled.div`
    padding: 0px 40px;
    position: relative;
    background-color: #f6f6f6;
    transition: all 0.5s;
&:hover{
  background-color:#dddddd;
}
&:hover img{
  filter: brightness(0.9);
}
span{
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  position:absolute;
  top: 10px;
  right: 20px;
  }
img{
  transition: all 0.5s;
  max-width: 220px;
}
`;
const Pro3 = styled.div`
  padding: 0px 40px;
  position: relative;
  background-color: #f6f6f6;
  border-radius: 0px 5px 0px 0px;
  transition: all 0.5s;
&:hover{
  background-color:#dddddd;
}
&:hover img{
  filter: brightness(0.9);
}
span{
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  position:absolute;
  bottom: 20px;
  right: 20px;
  }
img{
  transition: all 0.5s;
  max-width: 220px;
}
`;
const List = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  position: absolute;
  bottom: 15px;
  left: 26px;
  li{
  font-family: 'Poppins';
  font-style: normal;
  letter-spacing: 0.5px;
  }
  
  li:nth-child(1) {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-decoration-line: line-through;
  color: #9098B1;
}
li:nth-child(2) {
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #FB7181;
}
`;