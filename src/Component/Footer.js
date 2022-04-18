import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import '../index.css';

export default function Footer() {
    return (
        <Footerr>
            <Container>
                <Top>
                   <section>
                   <div>
                        <h2><img src="./images/logo.png" /></h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                        </p>
                    </div>
                    <div>
                        <h2>Follow Us</h2>
                        <p>
                            Since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </p>
                        <Social>
                            <li><FaFacebookF /></li>
                            <li><BsTwitter /></li>
                        </Social>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <p>
                            E-Comm , 4578<br /> Marmora Road,<br/> Glasgow D04 89GR
                        </p>
                    </div>
                   </section>
                </Top>
                <Middel>
                    <div>
                        <h2>Infomation</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Service</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>My Account</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Our Offers</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </Middel>
                <Line>
                    <hr/>
                </Line>
                <Copyright>
                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                    <ul>
                        <li><img src="./Images/Western.png" /></li>
                        <li><img src="./Images/master.png" /></li>
                        <li><img src="./Images/Paypal.png" /></li>
                        <li><img src="./Images/visa.png" /></li>
                    </ul>
                </Copyright>
            </Container>
        </Footerr>
    )
}

// style 
const Footerr = styled.div`
    padding: 100px 0px;
    background-color: var(--light-blue);
`;
const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`;
const Social = styled.ul`

    list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
li:nth-child(1) {
  color: #385C8E;
  font-size: 20px;
  padding: 24px 8px 24px 0px;
}

li:nth-child(2) {
  color: #03A9F4;
  padding: 24px 24px;
  font-size: 20px;
}
`;
const Top = styled.footer`
max-width:1200px;
section{
display: grid;
grid-template-columns: 1.5fr 1fr 1fr;
gap: 30px;
}
h2{
    padding: 14px 0px;
}
div{
    width: 250px;
}
p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #22262A;
}

`;
const Middel = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  h2 {
  color: var(--black);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding: 20px 0px;
}
li {
  list-style: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
`;
const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  p{
    font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #C1C8CE;
  }
  ul{
    list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  }
`;
const Line = styled.div`
hr{
  border: 0.5px solid #ffffff54;
  background: #ffffff59;
  width: 96%;
  margin: auto;
}
`;