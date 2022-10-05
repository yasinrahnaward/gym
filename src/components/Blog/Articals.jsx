import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Buttons from '../Buttons';
const ArticalsStyled=styled.div`
*{
    width: fit-content ;
    margin: auto;
}
margin-top:5rem ;
.postHeader{
    h3{
        padding: .5rem;
        font-size: 1.5rem;
    }
    .subtitle{
        font-size: 16px;
        font-weight: 100;

    }
}
.postContent{
    .postImage{
        width: 98%;
        height: 40vh;
        margin: 2rem 0;
    }
    a{
        color: var(--orange);
        margin: 0 1rem ;
        border-bottom: 1px solid;
    }
    .posttext{
        font-size: 18px;
       font-family: monospace;
        font-weight: 10;
        margin-bottom: 2rem;
    }

}
@media only screen and (max-width:768px) {
    .postContent{

        .postImage{
            height: 20vh;
        }
    }
}
`;
const Articals = (
    {
        Articales
    }
) => {
    const slice=Articales.ArticalText.slice(0,150);
    console.log(Articales)
    console.log(Articales.Title)

  return (
    <ArticalsStyled className='container'>
        <div className="postHeader">
            <h3>{Articales.Title}</h3>
            <div className='subtitle'>
                <span>Posted On</span>
                <span>{Articales.Date},</span>
                <span> by </span>
                <span>{Articales.Auther}</span>
            </div>
        </div>
        <div className="postContent">
            <div
             className="postImage" 
             style={{backgroundImage: `url(${Articales.ArticalImg})`,
            backgroundSize:'cover'
            }}
            >.</div>
            <p className="posttext">
                {slice}
            <Link to='/SinglePage' state={
                    Articales
            }>... Read more</Link>
            </p>
            </div>

    </ArticalsStyled>
  )
}

export default Articals