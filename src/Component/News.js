import styled from 'styled-components';

export default function News(){ 
    return(
        <>
        <Container>
        <Heading>LATEST NEWS</Heading>
            <Newssec>
                <NewsSlide>
                    <div>
                        <img src="./Images/nike.png" />
                    </div>
                    <div>
                        <h5>01 Jan, 2015</h5>
                        <h1>FREE SHIPPING</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </NewsSlide>
                <NewsSlide>
                    <div>
                        <img src="./Images/nike.png" />
                    </div>
                    <div>
                        <h5>01 Jan, 2015</h5>
                        <h1>FREE SHIPPING</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </NewsSlide>
                <NewsSlide>
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
justify-content: space-around;
padding: 100px 0px;
`;
const NewsSlide = styled.div`

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
font-size: 18px;
line-height: 22px;
color: #22262A;
    }
`;