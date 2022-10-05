import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import class1 from "../../assets/Classess/class-01.jpg";
const ClassItemStyle=styled.div`
.itemImage{
    width: 100%;
    height:100%;
    overflow: hidden;
    border-radius: 10px;
    display: inline-block;

}
.classInfo{
    margin-top: 1rem;
    background-color: var(--deep-dark-1);
    padding: 1rem;
    border-radius: 10px;
    a{
        color: white;
    }
}

.ClassTitle{
    font-size: 1.6rem;

}
.classDis{
    margin-top: 0.5rem;
}
.classInfo{
    background-color:#01151b;
}
@media only screen and (max-width:768px) {
    
}

`;
const ClassItems = (
    {
        img=class1,
        className="Class Name",
        classDis="this is the discription of classess"
    }
) => {
  return (
    <ClassItemStyle>
        <Link to="/Courses" className='itemImage'>
        <img src={img} alt="item one img"></img>
        </Link>
        <div className="classInfo">
            <Link to="#">
                <h3 className='ClassTitle'>{className}</h3>
            </Link>
            <p className='classDis'>{classDis}</p>
        </div>
    </ClassItemStyle>
  )
}

export default ClassItems