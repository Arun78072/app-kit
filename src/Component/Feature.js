import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

export default function Feature(){ 
    return(
        <>
        <Container>
            <Heading>FEATURED PRODUCTS</Heading>
            <Featuresec>

                <FeatureSlide>
                    <div>
                        <img src="./Images/Vector.png" />
                    </div>
                    <div>
                        <h1>FREE SHIPPING</h1>
                        <Star>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                        </Star>
                        <List>
                            <li>$299,43</li>
                            <li>$534,33</li>
                        </List>
                    </div>
                </FeatureSlide>
                <FeatureSlide>
                    <div>
                        <img src="./Images/Vector.png" />
                    </div>
                    <div>
                        <h1>FREE SHIPPING</h1>
                        <Star>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                        </Star>
                        <List>
                            <li>$299,43</li>
                            <li>$534,33</li>
                        </List>
                    </div>
                </FeatureSlide>
                <FeatureSlide>
                    <div>
                        <img src="./Images/Vector.png" />
                    </div>
                    <div>
                        <h1>FREE SHIPPING</h1>
                        <Star>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                        </Star>
                        <List>
                            <li>$299,43</li>
                            <li>$534,33</li>
                        </List>
                    </div>
                </FeatureSlide>
            </Featuresec>
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
const Featuresec = styled.div`
display:flex;
justify-content: space-around;
padding: 100px 0px;
`;
const FeatureSlide = styled.div`

    display:flex;
    align-items: center;
    gap:20px;
    font-family: 'Poppins';
    font-style: normal;
    h1{
font-weight: 600;
font-size: 22px;
line-height: 33px;
color: #22262A;
    }
`;

const Star = styled.ul`
    display: flex;
    list-style: none;
    li{
      color:#FFC600;
    }
`;
const List = styled.ul`
  display: flex;
  gap:2px;
  align-items: center;
  list-style: none;

  li{
  font-family: 'Poppins';
  font-style: normal;
  letter-spacing: 0.5px;
  }
  li:nth-child(2) {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-decoration-line: line-through;
  color: #9098B1;
}
li:nth-child(1) {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #FB7181;
}
`;

