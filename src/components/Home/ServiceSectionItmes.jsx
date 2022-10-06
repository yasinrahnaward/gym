import React from 'react';
import PargraphText from '../PargraphText';
import styled from 'styled-components';
const ItemsStyle=styled.div`
text-align: center;
.items-icon{
    svg{

        width:6rem;
        color: var(--orange);
        padding: 1.6rem;
        border-radius: 50%;

        background-color: var(--gray);
        &:hover{
            color: var(--gray);
            background-color: var(--orange);
        }

    } 
}
.serviceItem-title{
    font-size: 1.8rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}
.paragraph{
    margin-top: 1rem;
    color:var(--gray);
}

`;
const ServiceSectionItmes = ({
    itemIcon,
    itemTitle,
    itemText
}) => {

  return (
    <ItemsStyle >
        <div className="items-icon">{itemIcon}</div>
        <div className="serviceItem-title">{itemTitle}</div>
        <PargraphText>{itemText}</PargraphText>

    </ItemsStyle>
  )
}

export default ServiceSectionItmes