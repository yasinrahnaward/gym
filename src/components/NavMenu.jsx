
import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


const NavMenuDtyle=styled.div`
color: var(--gray);
position:absolute;
z-index: 50;
width: 100%;
background-color: var(--deep-dark-1);
        opacity: .7;
.items{
    margin: 0 2rem;
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
}
ul{
    display:flex;
    justify-content: flex-end;
    
    a{
        color: var(--white);
        font-size: 1.3rem;
    }
    li{
        
        margin:0 2%;
        padding: 5%;
        width: fit-content;
        &:hover{
            background-color: var(--deep-dark-2);
            a{
                color: var(--orange);
                padding-left: 1rem;
                border-left: 3px solid var(--orange);
                transition: ease-in-out 0.2s;
                
        cursor: pointer;
            }
        }
    }
}
.active>a{
        color: white;
    }
.responsiveNave
{
        display: none;       
}
.OpenMenu{
    margin: 1rem 1rem;
    width: 2rem;
    cursor: pointer;
    display: flex;
    float: right;
    display: none;
}
.hide{
    display: none;
}
@media only screen and (max-width:768px) {
    background-color: var(--deep-dark-1);
        opacity: 1;
    .OpenMenu{
        display: block;
    }
    .items{
        height: fit-content;
        display: none;
    }
    .responsiveNave{
        animation: slidin 0.4s ease-in-out;
        display: block;
        background-color: var(--deep-dark-1);
        align-items: center;
        height: 100vh;
        ul,h1{
            display: block;
            padding: 1rem;
            li{
                cursor: auto;
                border-bottom: 1px solid #042d3a;
                margin: auto;
                width: 100%;
                border-radius: 0;
                display: flex;
                justify-content: center;
                a{

                    padding: 1px;
                    border: none;
                    &:hover{
                        transform: scale(1.1);
                    }
                }
                &:hover{
                    padding-left: 1rem;
                border-left: 5px solid var(--orange);
                transition: ease-in-out 0.2s;
                }
            }
        }
        .Auth{
            width: 30%;
            margin-top:10px ;
            border: none;
            background-color: var(--deep-dark-2);
            border-radius: 10px;
            &:hover{
                transform: scale(1.04);
                transition: 0.2s ease-in-out;
            }
        }
    }
    @keyframes slidin {
        0%{
            transform: translateX(100%);
        }
        100%{
            
            transform: translateX(0px);
        }
    }

}


`;


const NavMenu = () => {
    const [nav, setNav] = useState(true);

  return (
    <NavMenuDtyle>
        {/* navigation bar for larg screen devices */}

        <ul className='items'>
            <h1>GYM</h1>
            <ul>
                <li className='active'>
                    <Link to="/" >
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blogs" >
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/Courses" >
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/contact" >
                        Contact
                    </Link>
                </li>

            </ul>
            <ul className=' signinout'>
                <li>
                    <Link to="/log in" >
                        Sign in 
                    </Link>
                </li>
                <li>
                    <Link to="/sign up" >
                        Sign up
                    </Link>
                </li>
            </ul>
        </ul>
        <div  onClick={()=>setNav(!nav)}>
        {nav ? <AiOutlineMenu size={24} className="OpenMenu"/>:<AiOutlineClose size={24} className="OpenMenu" />}
        </div>

        {/* responsive Navebar for mobile device */}
        <div className={!nav?"responsiveNave":"hide"}>
            <h1>GYM</h1>
            <ul>
                <li className='active'>
                    <Link to="/" >
                        <span onClick={()=>setNav(!nav)}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blogs" onClick={()=>setNav(!nav)} >
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/courses" onClick={()=>setNav(!nav)} >
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/contact"  onClick={()=>setNav(!nav)} >
                        Contact
                    </Link>
                </li>
                <li className='Auth'>
                    <Link to="/log in" onClick={()=>setNav(!nav)} >
                        Sign in 
                    </Link>
                </li>
                <li className='Auth'>
                    <Link to="/sign up" onClick={()=>setNav(!nav)} >
                        Sign up
                    </Link>
                </li>

            </ul>
        </div>
        
    </NavMenuDtyle>
  )
}

export default NavMenu