import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export default function Breadcum(){
    return(
        <>
        <Bar>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/">/ HOT DEAL</NavLink>
        </Bar>
        </>
    )
}
// style
const Bar= styled.div`
background-color:#F6F7F8;
margin:30px 0px;
display:flex;
justify-content:center;
gap:10px;
a{
    padding: 20px 0px;
    text-align: center;
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #262626;
}
`;