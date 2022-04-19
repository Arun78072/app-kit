import styled from 'styled-components';

export default function Shipping(){ 
    return(
        <>
        <Container>
            <ShipSec>
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
}
h1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 27px;
line-height: 40px;
color: #22262A;
}
p{
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #22262A;
}
`;