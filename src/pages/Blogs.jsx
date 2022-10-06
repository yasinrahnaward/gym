import React from 'react'
import Header from '../components/Header'

import image1 from '../assets/Blog/blog1.jpg'
import image2 from '../assets/Blog/blog2.jpg'
import image3 from '../assets/Blog/blog3.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper'
import styled from 'styled-components'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer'
import NavMenu from '../components/NavMenu'
const images=[image1,image2,image3];

const BlogStyle=styled.div`
.BlogsContainer{
}


`;

const Blogs = () => {
  const params = {
    modules: [Autoplay, Pagination,Navigation],
    pagination: {
      clickable: true
    },
    autoplay:{
        delay:4000
    },
    spaceBetween: 30
  }
  return (
    <BlogStyle>
      <NavMenu/>
      <div>
      <Header
       heroImages={images}
       headerSubTitle=""
       headerTitle='Relvent Article'
       headerTypedText={['Health','Nutrition','Sport']}
       swiperParameter={params}
       ></Header>
      </div>
      
      <Blog/>
      
      <Footer/>
    </BlogStyle>
  )
}

export default Blogs