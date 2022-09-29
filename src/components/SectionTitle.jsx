import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;
  color: var(--gray-1);
  margin-bottom:4rem;
  p {
    font-family: monospace;
    font-size: 1.6rem;
    margin-top: 1.2rem;
  }
  h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:3rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media only screen and (max-width:768px) {
    p{
      font-size: 1.2rem;
    }
    h2{
      font-size: 1.8rem;
    }
  }
`;
const SectionTitle = ({
  subTitle="This is subtitle",
  Title="This is Title"
}) => {
  return (
    <SectionTitleStyle>
      <p>{subTitle}</p>
      <h2>{Title}</h2>
    </SectionTitleStyle>
  );
};

export default SectionTitle;
