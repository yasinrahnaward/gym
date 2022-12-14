import React from 'react'
import styled from 'styled-components'
import BlogSectionTitle from './BlogSectionTitle';
import Articales from '../../assets/data/Articales'
import Artical from './Articals';
import AutherInfo from './AutherInfo';
import 'aos/dist/aos.css';


const BlogStyle=styled.div`
margin:auto;
display: flex;
justify-content: center;
.MainSection{
  
        width: 60%;
        height:max-content;
        .popularArticals{
          padding: 10rem 0;
          width: fit-content;
          margin: auto;
          justify-content: center;
        }
        .latestArticles{
          display: grid;
          grid-template-columns: repeat(2,1fr);
      
          gap: 1rem;
        }
    }
    /* bout auther section */
    .Autherinfo{
      width: 25%;
      margin-top: 10rem;
    }
    @media only screen and (max-width:995px){
      flex-direction: column;
      .MainSection{
        margin: auto;
        width: 80%;
        
      }
      .Autherinfo{
        margin:5rem auto;
        width: 80%;

      }
    }

`;
const Blog = () => {


  return (
    <BlogStyle>
          <div className="MainSection"  >
            <div className="popularArticals">
            <BlogSectionTitle text='Popular Articals'/>
              {
                
                Articales.map((value,index)=>{
                  console.log(value)
                  if(value.veiw>7000)
                  {
                    return <Artical key={index}
                     Articales={value}
                       />
                  }
                })
              }

            </div>
              <BlogSectionTitle text='Latest Articals'/>
            <div className="latestArticles">
              {
                Articales.map((value,index)=>{
                  return <Artical key={index} Articales={value}/>
                })
              }
            </div>
          </div>
          <div className='Autherinfo'  >
          <AutherInfo/>
          </div>
    </BlogStyle>
  )
}

export default Blog