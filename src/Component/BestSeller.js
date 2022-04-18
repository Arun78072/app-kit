import styled from 'styled-components';
import Product from "./Product";


export default function BestSeller() {
    return (
        <>
                <Bestsellerr>
                    <h1>Best Seller</h1>
                    <ul>
                        <li className="active">All</li>
                        <li>Bags</li>
                        <li>Sneakers</li>
                        <li>Belt</li>
                        <li>Sunglasses</li>
                    </ul>
                </Bestsellerr>
            <Allseller>
                <Productbox>
                    <Product title="title 1"/>
                    <Product title="title 2"/>
                    <Product title="title 3"/>
                    <Product title="title 4"/>
                    <Product title="title 5"/>
                    <Product title="title 6"/>
                    <Product title="title 7"/>
                    <Product title="title 8"/>
                </Productbox>
            </Allseller>
                <Appbtn>
                    <a href="/">Load More</a>
                </Appbtn>
            
        </>
    )
}
// Styled cpomponent 

const Bestsellerr = styled.div`
h1 {
  padding-bottom: 40px;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  color: #22262A;
}
ul{
    display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
}
li {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
}

`;
const Productbox = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;
const Allseller = styled.div`
  width: fit-content;
  margin: auto;
  padding-top: 50px;
`;
const Appbtn = styled.div`
    text-align: center;
    padding: 30px;
  a {
    color: #33A0FF;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  border-bottom: 4px solid #33A0FF;
  }
`;