import styled from 'styled-components';
import '../index.css';
export default function ShoesSection({font}) {
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
  }
  h1 {
  font-weight: 500;
  font-size: 56px;
    line-height: 52px;
  color: #FFFFFF;
  @media (max-width:600px){
    font-size: 40px;
    line-height: 44px;
  }
  }
  p {
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
}
a {
  font-weight: 600;
  font-size: 20px;
  color: #FFFFFF;
  line-height: 30px;
}
hr {
  width: 85px;
  border: 0.5px solid #ffffffc7;
}
`;