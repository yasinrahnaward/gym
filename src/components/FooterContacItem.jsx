import React, { useEffect } from 'react'
import { HiMail } from "react-icons/hi";
import styled from 'styled-components';
const FooterContacItemStyle=styled.div`
.itemcontainer{
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  border-left: 4px solid var(--deep-dark-2);
  
}

svg{
width: 3rem;
background-color: var(--orange);
padding: .4rem;
border-radius: 50%;
&:hover{
  background-color: var(--white);
  color: var(--orange);
}
}
p{
  margin-left: 1rem;
  font-size: 1rem;
  width: 70%;

}

`;
const FooterContacItem = ({
  itemIcon=<HiMail/>,
  itemText='this is palceholder for your text'
}) => {

  return (
    <FooterContacItemStyle>

      <div className="itemcontainer" >
        {itemIcon}
        <p>{itemText}</p>
      </div>

    </FooterContacItemStyle>
  )
}

export default FooterContacItem