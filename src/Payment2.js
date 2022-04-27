import Addtocart from './Addtocart'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
export default function Payment2(){
    return(
        <>
        <Addtocart />
        <Payments>
            <section>
            <Cancelbtn>
                <BsArrowLeftShort />
                <MdOutlineCancel />
            </Cancelbtn>
            <h1>Make Payment</h1>
            <ul>
                <li >1</li>
                <li >2</li>
                <li >3</li>
            </ul>
          
            <Paymentform>
            <img src="./Images/card.png" />
            <Form>
                    <input type="text" placeholder="Card Number" />
                <div>
                    <input type="text" placeholder="Expiry" />
                    <input type="text" placeholder="CVV" />
                </div>
                    <input type='text'  placeholder='Holder Number'/>
                <div className="card">
                    <input type="checkbox" name="card" value="card"/>
                    <label for="card">Save this credit card</label>
                </div>
              
            </Form>
            </Paymentform>
            <Btn>
                <Link to='/payment3'>Confirm</Link>
            </Btn>
            </section>
        </Payments>
        </>
    )
}
// Style
const Payments = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #2222224D;
    top: 0px;
    
    section{
        background: #ffffff;
    position: fixed;
    width: 800px;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
    h1{
        color: var(--blue);
        font-weight: 600;
        font-size: 32px;
        text-align:center;
    }
    ul{
        display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 24px;
    }
    li {
        display: flex;
    font-size: 18px;
    /* background-color: {(props) => props.color}; */
    background-color:grey;
    width: 40px;
    border-radius: 50%;
    height: 40px;
    color: #fff;
    text-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
    align-items: center;
    justify-content: center;
}
li:nth-child(1),li:nth-child(2){
    background-color:var(--blue);
}
`;
const Form =styled.div`
div {
    display:flex;
    gap: 12px;
}

input {
    width: 100%;
    background: #dfdede75;
    padding: 15px 12px;
    border-radius: 6px;
    border: none;
    margin:10px 0px;
}
h1{
    font-weight: 600;
    font-size: 20px;
    color:#40BFFF;
}
.card input{
    width:20px;
}
.card {
    display: flex;
    align-items: center;
}

`;
const Paymentform = styled.div`
display:flex;
justify-content:center;
gap:20px;
margin:20px 0px;
align-items: center;
img {
    height: fit-content;
}
`;
const Btn =styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 20px;
a{
    background: #40BFFF;
    padding: 12px 26px;
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
    font-size: 20px;
    display: inline-block;
}
`;
const Cancelbtn = styled.div`
display:flex;
justify-content:space-between;
svg{
    background: none !important;
    color: #40C5FF;
    font-size: 30px;
}
`;