import React from 'react'
import styled from 'styled-components'
import Articales from '../../assets/data/Articales'
import Buttons from '../Buttons'
import SocialMedia from '../SocialMedia'
import BlogSectionTitle from './BlogSectionTitle'
import { RecentArtical } from './RecentArtical'
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
  return (
    <AutherInfoStyle>
            <div className="Autherbio">
                <BlogSectionTitle text='About Auther'/>
                <div className='autherphoto'
                 style={{backgroundImage: `url(${Articales[0].AutherPhoto})`,
                 backgroundSize:'cover'
                 }}>

                </div>
                <p className='aboutAutherText'>
                  {Articales[0].aboutAuther}
                </p>
            </div>
            <div className='socialMedia'>
              <BlogSectionTitle text='Follow Me'/>
              <SocialMedia />
            </div>
            <div className='RecentPost'>
              <BlogSectionTitle text='Recent Artical'/>
              <RecentArtical image={Articales[0].ArticalImg} title={Articales[0].Title} date={Articales[0].Date}/>
              <RecentArtical image={Articales[0].ArticalImg} title={Articales[0].Title} date={Articales[0].Date}/>
              <RecentArtical image={Articales[0].ArticalImg} title={Articales[0].Title} date={Articales[0].Date}/>
              <form>
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