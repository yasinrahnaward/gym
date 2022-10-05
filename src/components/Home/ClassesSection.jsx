import React from 'react';
import SectionTitle from '../SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Navigation, Pagination  } from 'swiper';
import classess from '../../assets/data/classess';
import ClassItem from './ClassItem';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation]);

const ClassSectionstyle=styled.div`

border-bottom: 2px solid var(--deep-dark-1);
padding: 4rem 2rem;
.ClassesItems{
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
    height: max-content;
    padding: 2rem;


}
.wriper{

}
.swiper-button-prev,
.swiper-button-next{
position: absolute;
height: 40px;
width: 40px;
background-color: var(--deep-dark-1);
z-index: 40;
padding: 1rem;
border-radius: 5px;
box-shadow: 0px 0px 12px 8px var(--deep-dark);
&:hover{
    transition: .3s ease-in-out;
    scale: 1.1;
}
}
.slide{
    border-radius: 10px;
    padding: 1rem;
    background-color: var(--deep-dark-1);

}
.classInfo{
    background-color: var(--deep-dark-1);
}
.swiper-button-prev::after,
.swiper-button-next::after
{
    font-size: 1rem;
    color: var(--white);
}
.swiper-pagination{
    position: relative;
    top:.1rem;
}
@media only screen and (max-width:768px) {
     
}
.swiper{
    height:max-content;
}
.swiper-pagination-bullet{
    background-color: var(--orange);
}
.swiper-pagination-bullet-active{
    background-color: var(--orange);
}
`;
const ClassesSection = () => {

    return (
    <ClassSectionstyle className='Container'>
         <SectionTitle subTitle='Unlimited Classes' Title='WHAT WE CAN OFFER'/>
        <div className="ClassesItems">
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={
                {
                    640:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                    1200:{
                        slidesPerView:3,
                    }
                }
            }
            >
                {
                    classess.map((classItem,index) => {
                        if(index>=5) return;
                        return(
                        
                            <SwiperSlide className='slide' key={classItem.id}>
                                
                                <ClassItem 
                                img={classItem.img}
                                className={classItem.name}
                                classDis={classItem.desc}
                                >
                                </ClassItem>
                            </SwiperSlide>
    
                        )
                    })
                }
            </Swiper>
        </div>
    </ClassSectionstyle>
  )
}

export default ClassesSection