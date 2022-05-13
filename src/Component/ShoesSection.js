import styled from 'styled-components';
import '../index.css';
import gsap from "gsap";


export default function ShoesSection(props) {
    return (
    <Adidashoes>
      <div>
        <h1>Adidas Men Running<br />
            Sneakers</h1>
        <p>Performance and design. Taken right to the edge.</p>
        <a href="/">SHOP NOW</a>
        <hr />
      </div>
      <div>
        <img src="./Images/shoes.png" />
      </div>
    </Adidashoes>
    )
}
const Adidashoes = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue);
  padding:20px;
  @media (max-width:600px){
  flex-direction: column-reverse;
  }
 
  img {
  margin-top: -110px;
  max-width: 600px;
  width: 100%;
  position: relative;
  animation: shoesec 4s;
  animation-iteration-count: infinite;
  }
  h1 {
  font-weight: 500;
  font-size: 42px;
  padding-bottom: 16px;
  color: #FFFFFF;
  @media (max-width:786px){
    font-size:28px;
  }
  @media (max-width:600px){
  font-size: 40px;
  }
  }
  @keyframes shoesec {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 20px;
  }
  }
  p {
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  }
  a {
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 30px;
}

hr {
  width: 85px;
  border: 0.5px solid #ffffffc7;
}
`;