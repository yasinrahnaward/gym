import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    width: max-content;
    
    border: 2px solid var(--gray);
    &:hover{
        transition: 0.1s ease-in-out;
        background-color: var(--orange);
        border-color:var(--orange) ;
        color: var(--gray);
        
    }
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
const Buttons = ({btnLink,btnText="button",outline=false}) => {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          
        },[]);
    
      })
  return (
    <ButtonStyle outline={outline} className="btnwrapper" data-aos="fade-up">
        <Link className='btn' to={btnLink}>
            {btnText}
        </Link>
    </ButtonStyle>
  )
}

export default Buttons