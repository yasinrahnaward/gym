import React from 'react'
import styled from 'styled-components'
import AutherInfo from './AutherInfo';
import Footer from '../Footer'
import {IoChevronBackCircleOutline} from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
const SinglePageStyled=styled.div`

.container{
        display: flex;

        margin: auto;
        justify-content: center;
        padding: 5rem 0;
    

    .mainContent{
        padding: 2em;
        margin: 5rem 0;
        width: 60%;
        background-color: var(--deep-dark-1);
        p{
            font-weight: 100;
            padding: 1rem;
            &::first-letter{
                font-size: 4rem;
                initial-letter: 8;
                color: var(--orange);
            }
        }
        }
        .subtitle{
            margin-bottom: 5rem;
        }
        .back{
            display: flex;
            align-items: center;
            padding: 1rem;
            cursor: pointer;
            svg{
                width: 2rem;
            }
            a{
                padding: 0 1rem;
                color: var(--white);
            }
        }
    }
    
    .AuhterSection{
        width: 30%;
        margin: 5rem 0;
    }
    @media only screen and (max-width:995px){
        .container{

            flex-direction: column;
            .mainContent{
                margin: auto;
                width: 80%;
            }
            .AuhterSection{
                margin:5rem auto;
                width: 80%;
            }

      }
    }

`;
const SinglePage = (
{props}
) => {
    
    const location=useLocation()
    const Articale=location.state
    console.log(Articale)
    return (
    <SinglePageStyled >
        <div className='container'>
            <div className="mainContent">
            <h3>{Articale.Title}</h3>
            <div className='subtitle'>
                <span>Posted On</span>
                <span>{Articale.Date},</span>
                <span> by </span>
                <span>{Articale.Auther}</span>
            </div>
                <div className="postImage" style={{backgroundImage:`url(${Articale.ArticalImg})`
                    ,backgroundSize:'cover',
                    height:'50vh',
                    width:'100%'
            }}></div>
                <div className="post">
                    <p className='subhead'>
                        {Articale.ArticalText}
                    </p>
                </div>
                <div className="back">
                    <IoChevronBackCircleOutline/> 
                    <Link to={'/blogs'}>Back</Link>
                </div>
            </div>
     
            <div className="AuhterSection">
                 <AutherInfo/>
             </div>
        </div>
        <Footer/>
    </SinglePageStyled>
  )
}

export default SinglePage