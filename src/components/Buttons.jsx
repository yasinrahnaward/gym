import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const ButtonStyle=styled.div`

margin:3px;
display: inline;
.btn{
    font-size: 1.2rem;
    background-color:${(props)=>props.outline?'transparent': 'var(--gray)'};
    padding:.6rem 1rem ;
    display: flex;
    margin: auto;
    border-radius: 4px;
    border: 2px solid var(--gray);
}
&:hover{
    transition: 0.1s ease-in-out;
    
}
a{
    color: ${(props)=>!props.outline?'var(--deep-dark)': 'var(--gray)'};;
}
@media only screen and (max-width:768px) {
    .btn{
        font-size: 1rem;
    }
}

`;
const Buttons = ({btnLink="/",btnText="button",outline=false}) => {
  return (
    <ButtonStyle outline={outline} className="btnwrapper">
        <Link className='btn' to={btnLink}>
            {btnText}
        </Link>
    </ButtonStyle>
  )
}

export default Buttons