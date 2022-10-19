import React from "react";
import styled from "styled-components";
import Buttons from "../Buttons";
const CourseitemSyle = styled.div`
  width: 18rem;
  margin-bottom: 3rem;

  

  .category-container {
    height: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;


    &:hover {
      cursor: pointer;

      & .background-image {
        transform: scale(1.12);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & .category-body-container {
        opacity: 0.9;
        .items-icon {
          svg {
            transition: ease-in-out 1s;
            width: 4.5rem;
          }
        }
        .text-wraper{
            animation: up 0.7s ease-in-out;
            display: block;


        }
      }
      &.items-icon {
      }
    }

    &.large {
      height: 500px;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }

    .background-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    .category-body-container {
      height: max-content;
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      padding: 1rem;
      .items-icon {
        svg {
          width: 5rem;
          color: var(--white);
          padding: 1rem;
          border-radius: 50%;

          background-color: var(--deep-dark-1);
        }
      }
      h3 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        margin: 10px 0;
      }

      p {
        font-weight: lighter;
        font-size: 19px;
        margin: 5px auto;
        border-radius: 10px;
          padding: .7rem;
      }

    .text-wraper{
        
        display: none;
      }
    }
  }
  @keyframes up {
    0% {
      transform: translateY(15%);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @media only screen and (max-width:1067) {
        
  }
`;

const CoursesItems = ({ classItem }) => {
  const { name, img, desc, classIcon } = classItem;
  return (
    <CourseitemSyle>
      <div className="category-container">
        {/* <img src={img} alt="" className="catagory-image"/> */}
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            height: "60vh",
            opacity: 0.5,
          }}
        ></div>
        {
          <div className="category-body-container">
            <div className="items-icon">{classIcon}</div>
            <h3>{name}</h3>
            <div className="text-wraper">
              <p>{desc.slice(1, 80)}</p>
              <Buttons btnText="more"/>
            </div>
          </div>
        }
      </div>
    </CourseitemSyle>
  );
};

export default CoursesItems;
