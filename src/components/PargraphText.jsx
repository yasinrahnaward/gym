import React from 'react'
import styled from 'styled-components'

const PText=styled.div`
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.3rem;
    color: var(--gray-1);
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    @media only screen and (max-width:768px) {
        font-size: 1rem;
    }
`;

const PargraphText = (props) => {
  return (
    <PText className='paragraph'>{props.children}</PText>
  )
}

export default PargraphText