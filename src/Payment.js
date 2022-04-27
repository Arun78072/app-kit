import Addtocart from './Addtocart'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Payment(){
    return(
        <>
        <Addtocart />
        <Payments>
            <section>
            <h1>Make Payment</h1>
            <ul>
                <li >1</li>
                <li >2</li>
                <li >3</li>
            </ul>
          
            <Form>
                <div>
                    <input type="text" placeholder="First Name " />
                </div>
                <div>
                    <input type="text" placeholder="Last Name " />
                </div>
                <div>
                    <input type="email" placeholder='Email Address'/>
                </div>
                <div>
                    <textarea  placeholder='Address for Delivery'/>
                </div>
                <div>
                    <h1>Select Method of Payment</h1>
                    <input type="radio" value="Male" name="gender" /> Credit Card Or Debit
                    <input type="radio" value="Female" name="gender" /> Paypal
                    <input type="radio" value="Other" name="gender" /> Bank Transfer              
                </div>
                <div>
                    <input type="tel" placeholder='Mobile Phone'/>
                </div>
            </Form>
            <Btn>
                <Link to='/payment2'>Go to Payment</Link>
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
li:nth-child(1){
    background-color:var(--blue);
}
`;
const Form =styled.div`
div {
    width: 50%;
    padding: 10px 20px;
    float: left;
}
input,textarea {
    width: 100%;
    background: #dfdede75;
    padding: 15px 12px;
    border-radius: 6px;
    border: none;
}
textarea{
    height:100px;
}
h1{
    font-weight: 600;
    font-size: 20px;
    color:#40BFFF;
}
`;
const Btn =styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    text-align: center;
a{
    background: #40BFFF;
    padding: 12px 26px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
}
`;