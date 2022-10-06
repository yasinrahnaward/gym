import React,{useEffect} from "react";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import img1 from "../../assets/login/login1.png";
import img2 from "../../assets/login/login2.png";
import img5 from "../../assets/login/login5.png";
import img6 from "../../assets/login/login6.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [img1, img2, img5, img6];

const LoginStyle = styled.div`
  .container {
    margin: 4% auto;
    height: max-content;
    display: flex;
    justify-content: center;
    height: max-content;
  }

  .formside {
    width: 40%;
    padding: 2rem;
    margin: auto;
    .logintitle {
      width: 100%;
      margin: 1rem auto;
      h3 {
        font-size: 3rem;
        width: 80%;
        margin: auto;
      }
      p {
        width: 80%;
        font-size: 1rem;
        margin: 1rem auto;
      }
    }
    form {
      .passwordinput {
        input {
          display: block;
          color: var(--white);
          margin: 1rem auto;
          width: 80%;
          padding: 1rem;
          border: none;
          background-color: var(--deep-dark);
          border-bottom: 1px solid var(--deep-dark-1);
        }
      }
      .remember {
        /* Customize the label (the container) */
        .container {
          width: max-content;
          display: block;
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          cursor: pointer;
          font-size: 15px;
        }

        /* Hide the browser's default checkbox */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 25px;
          width: 25px;
          background-color: #eee;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input ~ .checkmark {
          background-color: #ffffff;
        }

        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
          background-color: var(--orange);
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
      .forgotpassword {
        width:100%;
        a {
          color: var(--white);
          border-bottom: 1px solid;
          margin-left: 1rem;
          padding: 0 0 5px 0;
          width: max-content;
          &:hover {
            color: var(--orange);
          }
        }
      }
      .cover {
        font-size: 14px;
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: 1rem auto;
      }
    }
    .btn {
      width: 80%;
      justify-content: center;
      align-items: center;
    }
  }

  .swiperside {
    width: 50%;
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      height: 40px;
      width: 40px;
      background-color: var(--redz);
      z-index: 40;
      top: 50%;
      padding: 1rem;
      border-radius: 5px;
      &:hover {
        transition: 0.3s ease-in-out;
        scale: 1.1;
      }
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 1rem;
      color: var(--white);
      padding: 1rem;
      border-radius: 5px;
      background-color: var(--deep-dark-1);
    }
    .swiper-pagination {
      position: relative;
      top: -2rem;
    }

    .swiper-pagination-bullet {
      background-color: var(--white);
      width: 15px;
      height: 15px;
    }
    .swiper-pagination-bullet-active {
      background-color: var(--white);
    }
    .btnwrapper {
      width: fit-content;
    }
    .slide {
      height: 80vh;
    }
  }
  @media only screen and (max-width: 1040px) {
    .container {
      flex-direction: column;
      align-items: center;
      .swiperside {
        width: 80%;
        height: 50%;
        .slide{
          width: 100px;
          height: 50%;

        }
      }
      .formside {
        width: 100%;
      }
    }
  }
`;
const params = {
  modules: [Autoplay, Pagination, Navigation],
  pagination: {
    clickable: true,
  },
  navigation: {},
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 30,
};
const LoginForm = ({ swiperParameter = params }) => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      
    },[]);

  })
  return (
    <LoginStyle>
      <div className="container">
        <div className="swiperside" data-aos="fade-up">
          <Swiper {...swiperParameter}>
            {images.map((value, index) => {
              return (
                <SwiperSlide className="slide" key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${value})`,
                      backgroundSize: "cover",
                      height: "90vh",
                    }}
                  ></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="formside"  data-aos="fade-up">
          <div className="logintitle">
            <h3>Sign in</h3>
            <p>Please fill the input below here</p>
          </div>
          <form action="">
            <div className="passwordinput">
              <input type="text" name="Email" placeholder="Email" />
              <input type="password" name="Password" placeholder="Password" />
            </div>
            <div className="cover">
              <div className="remember">
                <label className="container">
                  Remember Me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="forgotpassword">
                <label type="checkbox">
                  <Link to={""}>Forgot Password </Link>
                </label>
              </div>
            </div>
          </form>
          <Buttons btnText="Sign In"></Buttons>
          <Buttons btnText="Sign Up" btnLink="/registeration"></Buttons>
        </div>
      </div>
    </LoginStyle>
  );
};

export default LoginForm;
