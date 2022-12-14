import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
const RecentArticlastyle=styled.div`

display: flex;
gap: 2rem;
margin: 2rem 0 2rem 0;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

.image{
    height: 10vh;
    width:15vh;
    &:hover{
        opacity: 0.5;
    }
}
h4:hover{
    cursor: pointer;
    color: var(--orange);
}
`;

export const RecentArtical = (
    {
        image="Post format",
        title="Post format",
        date="october 8,2022"
    }
) => {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          
        },[]);
    
      })
  return (
    <RecentArticlastyle data-aos="fade-up">
        <div className="image"  
        style={{backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        }}> </div>

        <div className='Title' >
            <h4>{title}</h4>
            <p>{date}</p>
        </div>
    </RecentArticlastyle>
  )
}
