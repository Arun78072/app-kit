import styled from 'styled-components'
import Breadcum from './Component/Breadcum';
import {Link} from 'react-router-dom'
export default function Addtocart(){
    return(
        <>
        <Breadcum />
        <Porductcart>
            <table>
            <tr>
                <th>  </th>
                <th>Products</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Unit Price</th>
            </tr>
            <tr>
            <td>*</td>
                <td><img src="./Images/cartproduct.png" /> Nike Airmax 270 react</td>
                <td>$998</td>
                <td><button>-</button> 2 <button>+</button></td>
                <td>$499</td >
            </tr>
            <tr>
            <td>*</td>
                <td><img src="./Images/cartproduct.png" /> Nike Airmax 270 react</td>
                <td>$998</td>
                <td><button>-</button> 2 <button>+</button></td>
                <td>$499</td >
            </tr>
            </table>
        </Porductcart>
        <Cartsec>
            <div>
                <Letter>
                    <input type="text" name="name" placeholder="Voucher code"/>
                    <button>Redeem</button>
                </Letter>
            </div>
            <div>
                <ul>
                    <li>Subtotal</li>
                    <li>$998</li>
                </ul>
                <ul>
                    <li>Shipping fee</li>
                    <li>$20</li>
                </ul>
                <ul>
                    <li>Coupon</li>
                    <li>No</li>
                </ul>
                <ul className='final'>
                    <li>TOTAL</li>
                    <li>$118</li>
                </ul>
                <Link to='/payment'>Check out</Link>
            </div>
        </Cartsec>
        </>
    )
}
// style
const Porductcart = styled.div`
max-width:1200px;
margin:auto;
table {
    width: 100%;
}
td {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap:wrap;
}
tr {
    border-bottom: 1px solid #e1e1e1;
    display: grid;
    text-align: left;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1fr;
    padding: 35px 0px;
}
button{
    padding: 20px;
    background: none;
    border: none;
    font-size: 24px;
    }
`;
const Cartsec = styled.div`
    display: flex;
    max-width:1200px;
    justify-content: space-around;
    margin:50px auto;
    @media(max-width:450px){
        flex-direction: column-reverse;
    }
div:nth-child(2){
    width:300px;
    }
ul {
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
    list-style: none;
}
ul.final li{
    font-weight: 500;
font-size: 30px;
color: #22262A;
}
a{
    background: #40BFFF;
    padding: 12px 26px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    display: block;
    text-align: center;
}
`;
const Letter = styled.div`
    display:flex;
    justify-content:center;
    padding: 40px 0px;
    flex-wrap:wrap;

input{
    border-radius: 6px;
    border: 2px solid #BCDDFE;
    padding: 12px;
    width: 200px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #262626;
    opacity: 0.35;
    }
button{
    background: #40BFFF;
    border: none;
    padding: 12px 26px;
    color: #fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    }
`;
