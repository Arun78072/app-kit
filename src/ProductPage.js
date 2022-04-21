import styled from 'styled-components'
import ShoesSection from './Component/ShoesSection';
import Product from './Component/Product';
import Sidebar from './Component/Sidebar';
export default function Products(){
    return(
        <>
        <PageDiv>
            <div className='div1'>
                <Sidebar /> 
            </div>
            <div>
                <ShoesSection /> 
                <h1>Filter bar </h1>
                <ProductBox>
                    <Product title="title 1"/>
                    <Product title="title 2"/>
                    <Product title="title 3"/>
                    <Product title="title 4"/>
                    <Product title="title 5"/>
                    <Product title="title 6"/>
                    <Product title="title 7"/>
                    <Product title="title 8"/>
                    <Product title="title 9"/>
                    <Product title="title 10"/>
                    <Product title="title 11"/>
                    <Product title="title 12"/>
                </ProductBox>
            </div>
        </PageDiv>
        
        </>
    )
}

//style

const PageDiv = styled.div`
max-width:1200px;
margin:auto;
display:flex;
justify-content:center;
gap:20px;
.div1{
    width:100%;
    @media (max-width:768px){
        display:none;
    }
}
`;
const ProductBox = styled.div`
display:flex;
gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;
