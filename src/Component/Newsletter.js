import styled from "styled-components";


export default function Newsletter(){
    return(
        <>
        <Letter>
        <input type="text" name="name" placeholder="Search query..."/>
        <button>Search</button>
        </Letter>
        </>
    )
} 

const Letter = styled.div`
    display:flex;
    justify-content:center;
    padding: 40px 0px;
input{
    border-radius: 6px;
    border: 4px solid #BCDDFE;
    padding:20px;
    width: 400px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #262626;
    opacity: 0.35;
    }
button{
        background: #40BFFF;
        border:none;
        padding:20px  30px;
        color:#fff;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
    }
`;
