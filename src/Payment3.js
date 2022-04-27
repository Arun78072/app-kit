import Addtocart from './Addtocart'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { BsCheck2 } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
export default function Payment3(){
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
            <div>
            <BsCheck2 />
            </div>
            
            <Btn>
                <Link to='/'>Confirm</Link>
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
    div{
        text-align:center;
        margin-top:30px;
    }
    svg{
        background-color: #40BFFF;
        width: 70px;
        height: 70px;
        padding: 18px;
        border-radius: 50%;
        color: #fff;
    }
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
li:nth-child(1),li:nth-child(2),li:nth-child(3){
    background-color:var(--blue);
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
}
`;