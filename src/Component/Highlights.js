import styled from 'styled-components'

export default function Highlights(){
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
gap:0px;
h1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 150%;
letter-spacing: 0.5px;
color: #223263;
position: absolute;
    top: 10px;
    left: 10px;

}
`;
const Pro1 = styled.div`
position:relative;
span{
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  bottom: 20px;
    right: 0px;
    position:absolute;
  }
`;
const Pro2 = styled.div`
position:relative;
span{
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  position:absolute;
  top: 10px;
    right: 10px;
  }
`;
const Pro3 = styled.div`
position:relative;
span{
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #40BFFF;
  position:absolute;
  bottom: 30px;
    right: 12px;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  position: absolute;
    bottom: 15px;
    left: 15px;

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