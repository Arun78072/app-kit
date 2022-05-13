import styled from 'styled-components';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Shipping(){ 

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
      }, []);


    return(
        <>
        <Container>
            <ShipSec data-aos="fade-up" data-aos-offset='100'
     data-aos-anchor-placement="bottom-bottom">
                <div>
                    <img src="./Images/shipping.png" />
                    <h1>FREE SHIPPING</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <img src="./Images/shipping.png" />
                    <h1>FREE SHIPPING</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <img src="./Images/shipping.png" />
                    <h1>FREE SHIPPING</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </ShipSec>   
        </Container>
        </>
    )
}

const Container = styled.div`
    max-width: 1200px;
    margin: auto;

`;
const ShipSec = styled.div`
    display:flex;
    justify-content: space-around;
    padding: 100px 20px;
    flex-wrap: wrap;
    gap: 20px;       
    div{
        text-align:center;
        max-width:200px;
        transition:all 0.5s;
        cursor:pointer;
    }
    div:hover{
        margin-top:-20px;
    }
    h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    color: #22262A;
    @media (max-width:786px){
        font-size: 22px;
    }
    }
    p{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #22262A;
    @media (max-width:786px){
        font-size: 14px;
    }
    }
    img{
    margin-bottom:30px;
    }
`;