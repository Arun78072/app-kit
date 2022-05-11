import styled from 'styled-components';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function News(){ 

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
      }, []);

    return(
        <>
        <Container>
        <Heading>LATEST NEWS</Heading>
            <Newssec >
                <NewsSlide  data-aos="fade-up" 
                            data-aos-offset='100'
                            data-aos-anchor-placement="bottom-bottom" 
                            >
                    
                    <div>
                        <img src="./Images/nike.png" />
                    </div>
                    <div>
                        <h5>01 Jan, 2015</h5>
                        <h1>FREE SHIPPING</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </NewsSlide>
                <NewsSlide data-aos="fade-down" 
                            data-aos-offset='100'
                            data-aos-anchor-placement="bottom-bottom" >
                    <div>
                        <img src="./Images/nike.png" />
                    </div>
                    <div>
                        <h5>01 Jan, 2015</h5>
                        <h1>FREE SHIPPING</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </NewsSlide>
                <NewsSlide data-aos="fade-up" 
                            data-aos-offset='100'
                            data-aos-anchor-placement="bottom-bottom" >
                    <div>
                        <img src="./Images/nike.png" />
                    </div>
                    <div>
                        <h5>01 Jan, 2015</h5>
                        <h1>FREE SHIPPING</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </NewsSlide>
            </Newssec>
        </Container>
        </>
    )
}

// Style
const Heading = styled.h1`
    font-family: 'Poppins';
    text-align:center;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 52px;
    color: #22262A;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`;
const Newssec = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 100px 0px;
`;
const NewsSlide = styled.div`
    max-width: 380px;
    display:flex;
    align-items: center;
    gap:20px;
    font-family: 'Poppins';
    font-style: normal;
    h5{
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #C1C8CE;
    }
    h1{
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #22262A;
    }
    p{
    font-weight: 400;
    font-size: 16px;
    color: #22262A;
    }
`;