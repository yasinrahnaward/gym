import React, { useEffect } from 'react'
import styled from 'styled-components'
import Articales from '../../assets/data/Articales'
import Buttons from '../Buttons'
import SocialMedia from '../SocialMedia'
import BlogSectionTitle from './BlogSectionTitle'
import { RecentArtical } from './RecentArtical'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AutherInfoStyle=styled.div`
    
      width: 100%;
      height: max-content;
      padding: 2rem;
      background-color:var(--deep-dark-1);
      .autherphoto{
          margin: 2rem 0;
          background-size: cover;
          height: 30vh;
          width: 100%;
      }
      .BlogSectionTitl{
        
    border-bottom: 2px solid var(--deep-dark);
      }

.Autherbio,.socialMedia{
    margin-bottom: 4rem;
    height: fit-content;
  }
  form{
    width: fit-content;
    margin: auto;
    background-color:var(--deep-dark);
    label{  
      font-size: 1rem;
      margin: 0 1rem;
          }
    input{
      padding:.5rem;
    }
    
  }
  .btn{
    margin:auto;
    width:max-content;
    

  }
  
`;
const AutherInfo = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      
    },[]);

  })
  return (
    <AutherInfoStyle>
            <div className="Autherbio">
                <BlogSectionTitle text='About Auther'/>
                <div className='autherphoto' data-aos="fade-up"
                 style={{backgroundImage: `url(${Articales[0].AutherPhoto})`,
                 backgroundSize:'cover'
                 }}>

                </div>
                <p className='aboutAutherText' data-aos="fade-up">
                  {Articales[0].aboutAuther}
                </p>
            </div>
            <div className='socialMedia' data-aos="fade-up">
              <BlogSectionTitle text='Follow Me'/>
              <SocialMedia />
            </div>
            <div className='RecentPost'>
              <BlogSectionTitle text='Recent Artical'/>
              <RecentArtical image={Articales[0].ArticalImg} title={Articales[0].Title} date={Articales[0].Date}/>
              <RecentArtical image={Articales[0].ArticalImg} title={Articales[0].Title} date={Articales[0].Date}/>
              <RecentArtical image={Articales[0].ArticalImg} title={Articales[0].Title} date={Articales[0].Date}/>
              <form data-aos="fade-up">
                 <label>Search
                 </label>
                  <input type="text" />
             </form>
              <Buttons btnText='Load More' outline={true}/>
            </div>

    </AutherInfoStyle>
  )
}

export default AutherInfo