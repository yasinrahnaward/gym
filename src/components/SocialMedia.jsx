import React from 'react'
import {IoShareSocialSharp} from 'react-icons/io5'
import {IoLogoLinkedin,IoLogoGoogleplus,IoLogoTwitter,IoLogoFacebook,IoLogoInstagram} from "react-icons/io";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SocialMediaStyle=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    svg{
        width: 1.5rem;
        margin: .5rem;

    }
    a{
        color: var(--white);
    }

`;
const SocialMedia = ({
    linkedinlink='#',
    googlelinke='#',
    twitterlinke='#',
    facebooklinke='#',
    instagramlinke='#',
    sharelinke='#',

}) => {
  return (
    <SocialMediaStyle className='socialMedia'>
        <Link to={linkedinlink} >
            <IoLogoLinkedin/>
        </Link>
        <Link   to={googlelinke}>
        <IoLogoGoogleplus/>
        
        </Link>
        <Link  to={twitterlinke}>
        
        <IoLogoTwitter/>
        </Link>
        <Link to={facebooklinke}>
        
        <IoLogoFacebook/>
        </Link>
        <Link to={instagramlinke}>
        <IoLogoInstagram/>
        
        </Link>
        <Link to={sharelinke}>
        <IoShareSocialSharp/>
        </Link>
    </SocialMediaStyle>
  )
}

export default SocialMedia