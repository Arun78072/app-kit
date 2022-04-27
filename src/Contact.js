import styled from 'styled-components';
import Newsletter from './Component/Newsletter'
import { Link } from 'react-router-dom';
import Breadcum from './Component/Breadcum'
export default function Contact(){
    return(
        <>
        <Breadcum />
        <Form>
            <div>
                <img src="./Images/call.png" />
                    <section>
                    <h1>
                        get in<br /> touch 
                    </h1>
                    <p><Link to="/">contact@e-comm.ng</Link></p>
                    <p><Link to='/'>+234 4556 6665 34</Link></p>
                    <p>20 Prince Hakerem Lekki
                    Phase 1, Lagos.</p>
                    </section>
            </div>
            <div>
                <label>Full Name</label>
                <input type="text" placeholder="James Doe" />
                <label>Email </label>
                <input type='email' placeholder="jamesdoe@gmail.com"/>
                <label>Message </label>
                <textarea placeholder='Type your message' />
            </div>
        </Form>
        <Newsletter />
        </>
    )
}
// Styled 
const Form = styled.div`
max-width:1200px;
margin:auto;
display:grid;
grid-template-columns: 1fr 1fr;
position:relative;
h1{
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 47px;
text-transform: lowercase;
color: #FFFFFF;
display:block;
margin: 20px 0px 90px 0px;}
p{
    display:block;
    margin: 30px 0px;
    color: #fff;
}
a{
    color: #fff;
}
img{
    position: absolute;
    width: 530px;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
}
section {
    margin-left: 50%;
}
div{
    padding:50px;
    position:relative;
}
div:nth-child(1){
    background-color:var(--blue);
    display:flex;
}
div:nth-child(1)::after{
    content: '';
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    background: #40bfff;
    height: 80px;
    border-radius: 50%;
}
label {
    display: block;
    margin: 24px 0px 5px;
}
input{
    border: 1px solid #969393;
    width: 100%;
    padding: 16px;
    border-radius: 4px;
}
textarea {
     border-radius: 4px;
    width: 100%;
    height: 200px;
    padding: 16px;
    border: 1px solid #969393;

}
`;