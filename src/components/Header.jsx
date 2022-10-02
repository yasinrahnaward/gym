import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Autoplay, Navigation, Pagination  } from 'swiper';
import Typed from 'react-typed'
import Buttons from './Buttons';
SwiperCore.use([Navigation]);
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
}
.swiper-pagination{
    position: relative;
    top:-2rem;



}

.swiper-pagination-bullet{
    background-color: var(--orange);
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
    margin: .5rem;
}
.headerSubTitle{
    font-size: 2rem;
}
.headerTitle{
    font-size: 4rem;
    
    background-color: var(--deep-dark-1);
    color: var(--gray);
    opacity: 0.7;
}
.headerTypedText{
    font-size: 2rem;
    background-color: var(--deep-dark-1);
    padding: 1rem;
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

const Header = ({
    heroImages,
    headerSubTitle="Header SubTitle",
    headerTitle="Header Titl",
    headerTypedText=["Header Typed Text "]

}) => {

      return (
        
        <HeaderStyle>
            <div>
            <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay:4000
            }}
            
            >
                {
                    heroImages.map((image,index) => {
                        return(
                        
                            <SwiperSlide  key={index}>
                                <div className='slide'
                                 style={{backgroundImage: `url(${image})`,
                                 backgroundSize:'cover',
                                 height:'102vh'
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
                                    <Buttons btnLink='/home' btnText='Try Your Free Trial' outline={false}/>
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

