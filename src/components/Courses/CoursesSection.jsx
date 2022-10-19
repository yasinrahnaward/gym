import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";
import CoursesItems from "./CoursesItems";
import classess from "../../assets/data/classess";
const CoursesSectionStyle = styled.div`
  padding: 8rem 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  .classess-container{
    width: 80%;
    padding: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
}

`;
const CoursesSection = () => {
  return (
    <CoursesSectionStyle>
      <SectionTitle
        subTitle="Sport is w way of life"
        Title="OUR CLASSESS"
      ></SectionTitle>
      <div className="classess-container">
        {classess.map((value, index) => (
          <CoursesItems key={index} classItem={value}></CoursesItems>
        ))}
      </div>
    </CoursesSectionStyle>
  );
};

export default CoursesSection;
