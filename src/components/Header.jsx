import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay, Navigation, Pagination  } from 'swiper';
import Typed from 'react-typed'
import Buttons from './Buttons';
const HeaderStyle=styled.div`
overflow: hidden;
border-bottom: 2px solid var(--deep-dark-1);
height: 102vh;
.swiper-button-prev,
.swiper-button-next{
position: absolute;
height: 40px;
width: 40px;
background-color: var(--redz);
z-index: 40;
top: 50%;
padding: 1rem;
border-radius: 5px;
&:hover{
    transition: .3s ease-in-out;
    scale: 1.1;
}

}
.swiper-button-prev::after,
.swiper-button-next::after
{
    font-size: 1rem;
    color: var(--white);
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--deep-dark-1);
}
.swiper-pagination{
    position: relative;
    top:-2rem;



}

.swiper-pagination-bullet{
    background-color: var(--orange);
    width: 15px;
    height: 15px;
}
.swiper-pagination-bullet-active{
    background-color: var(--orange);
}
.btnwrapper{
    width:fit-content;
}
.slide{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 }
.headerSubTitle,.headerTitle,.headerTypedText
{
    color:var(--white)
}
.headerSubTitle{
    font-size: 2rem;
}
.headerTitle{
    font-size: 4rem;
    
}
.headerTypedText{
    font-size: 2rem;
    /* background-color: var(--deep-dark-1); */
}
@media only screen and (max-width:768px)
    {
        .headerSubTitle{
    font-size: 1rem;
}
.headerTitle{
    font-size: 3rem;
    color: var(--orange);
}
.headerTypedText{
    font-size: 1.2rem;
}
    }
`;
const params = {
    modules: [Autoplay, Pagination,Navigation],
    pagination: {
      clickable: true
    },
    navigation: {

    },
    autoplay:{
        delay:4000
    },
    spaceBetween: 30
  }
const Header = ({
    heroImages,
    headerSubTitle="Header SubTitle",
    headerTitle="Header Titl",
    headerTypedText=["Header Typed Text "],
    swiperParameter=params

}) => {

    

      return (
        
        <HeaderStyle>
            <div>
            <Swiper
            {...swiperParameter}
            
            >
                {
                    heroImages.map((image,index) => {
                        return(
                        
                            <SwiperSlide  key={index}>
                                <div className='slide'
                                 style={{backgroundImage: `url(${image})`,
                                 backgroundSize:'cover',
                                 height:'102vh',
                                opacity:0.8,

                                 
                                }}
                                >
                                    <p className="headerSubTitle">{headerSubTitle}</p>
                                    <h1 className="headerTitle">{headerTitle}</h1>
                                    <Typed className="headerTypedText"
                                      strings={headerTypedText}
                                      typeSpeed={120}
                                      backSpeed={10}
                                      loop
                                    />
                                    <Buttons btnLink='#' btnText='Try Your Free Trial' outline={false}/>
                                </div>
                            </SwiperSlide>
    
                        )
                    })
                }
            </Swiper>
        </div>
        </HeaderStyle>
      )
}

export default Header

