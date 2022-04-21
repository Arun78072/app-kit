import styled from 'styled-components';
import Product from './Product';
export default function All(){
    return(
        <>
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

                <Appbtn>
                    <a href="/">Load More</a>
                </Appbtn>
        </>
    )
}

//style

const Productbox = styled.div`
   display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1400px;
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