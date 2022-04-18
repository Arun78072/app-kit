import styled from 'styled-components';
import '../index.css';
export default function ShoesSection() {
    return (
            <Adidashoes>
                <div>
                    <h1>Adidas Men Running<br />
                    Sneakers</h1>
                    <p>Performance and design. Taken right to the edge.</p>
                    <a href="/">SHOP NOW</a>
                    <hr />
                </div>
                <img src="./images/shoes.png" />
            </Adidashoes>
    )
}
const Adidashoes = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue);
  img {
  margin-top: -110px;
  }
h1 {
  font-weight: 500;
  font-size: 55px;
  line-height: 82px;
  color: #FFFFFF;
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