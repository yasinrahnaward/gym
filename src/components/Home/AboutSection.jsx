import React from 'react'
import Buttons from '../Buttons';
import PargraphText from "../PargraphText";
import SectionTitle from '../SectionTitle'

import aboutImageSecond from "../../assets/About/about-02.png";
import styled from 'styled-components';
    const AboutSectionStyle=styled.div`
    padding: 9rem 0;
    border-bottom: 2px solid var(--deep-dark-1);
    
    .Container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        img:hover{
            opacity:.5;
        }
    }
    .leftside,.rightside{
        flex: 1;
    }
    .aboutButton{
        height: max-content;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
    }
    .paragraph{
            margin: 0 3rem;
        }
    @media only screen and (max-width:979px)
    {
        .leftside{
            flex: 4;
        }
        .rightside{
            flex: 3;
        }
    }
    @media only screen and (max-width:768px)
    {
        .Container{
            flex-direction: column;
            text-align: center;
        }
        .paragraph{
            
            font-size:.9rem;
            text-align: center;
        }
        
        .leftside
        .rightside{
            margin-top:2rem ;
        }
        .aboutButton{
            flex-direction: column;
            gap: 0;
            a,.btnwrapper{
                width: 100%;
                justify-content: center;
            }

            
        }
    }
    `;
const AboutSection = () => {
  return (
    <AboutSectionStyle>
        <div className='Container'>
            <div className="leftside">
                <SectionTitle subTitle='Introduction' Title='About Us'/>
                <PargraphText>
                    Whether you want to lose weight, tone up, improve strength, or just
                    have fun with others, there's something for everyone. Our Fitness
                    Class Coaches will empower you to reach your goals in a fun and
                    supportive community.
                </PargraphText>
                <div className="aboutButton">
                    <Buttons outline={true} btnLink="/blogs" btnText="read more"></Buttons>
                    <Buttons outline={false} btnLink="/blogs" btnText="Join Us"></Buttons>
                </div>
            </div>
            <div className="rightside">
          <img src={aboutImageSecond} alt=""></img>
            </div>
        </div>
    </AboutSectionStyle>
  )
}

export default AboutSection