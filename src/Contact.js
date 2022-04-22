import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Contact(){
    return(
        <>
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
            <input type="text" placeholder='Type your message' />
            </div>
        </Form>
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
margin-bottom: 110px;
}
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
    width: 500px;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
}

section {
    margin-left: 50%;
}
div{
    padding:50px;
}
div:nth-child(1){
    background-color:var(--blue);
    display:flex;
}
label {
    display: block;
    margin: 24px 0px 5px;
}
input{
    width: 100%;
    padding: 16px;
}
`;