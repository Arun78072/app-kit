import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import styled from 'styled-components'
import { ImCross } from 'react-icons/im';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()
    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }
    const emptyCart = () => {
        return(
                    <Emptycart>
                        <h1>Your Cart is Empty</h1>
                    </Emptycart>
        )
    }
    const productdel = () => {
        return(
            <>
            <Porductcart>
                <table>
                    <tr>
                        <th>  </th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                    </tr>
                </table>
            </Porductcart>
            </>
        )
    }
    const cartItems = (product) => {
        return(
            <>
                <tr>
                    <td><button onClick={()=>handleDel(product)} className="cancleBtn"> <ImCross /> </button></td>
                    <td><div><img src={product.image} alt={product.title} height="200px" width="180px"/> {product.title}</div></td>
                    <td>${product.price}</td>
                    <td><button onClick={()=>handleDel(product)}>-</button> {product.qty} <button onClick={()=> handleAdd(product)}>+</button></td>
                    <td>${product.qty * product.price}</td >
                </tr>                
            </>
        )
    }
    const buttons = () => {
        return(
            <>
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
                            <li>$998 </li>
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
                        <NavLink to='/payment'>Check out</NavLink>
                    </div>
                </Cartsec>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && productdel()}
            <Porductcart>
                <table>
                    {state.length !== 0 && state.map(cartItems)}
                </table>
            </Porductcart>
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;

// Style 
const Productrow = styled.div`
    display: flex;
    align-items: center;
    gap: 20%;
    max-width: 1200px;
    margin: auto;
`;
const Emptycart =styled.div`
    text-align: center;
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
    grid-template-columns: 0.1fr 2fr 1fr 1fr 1fr;
    padding: 35px 0px;
    gap:10px;
}
button.cancleBtn {
    font-size: 12px;
    cursor: pointer;
    color: red;
}
button{
    padding: 20px;
    background: none;
    border: none;
    font-size: 24px;
    }
div{
    display:flex;
    align-items:center;
    gap: 10px;
}
`;