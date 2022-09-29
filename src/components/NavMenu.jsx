
import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


const NavMenuDtyle=styled.div`
color: var(--gray);
position:fiexd;
width: 100%;
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
        background-color: var(--deep-dark-1);
        margin:4% 2%;
        padding: 3%;
        border-radius: 5px;
        width: fit-content;
        cursor: pointer;
        &:hover{
            background-color: var(--deep-dark-2);
            a{
                color: white;
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
    .OpenMenu{
        display: block;
    }
    .items{
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
            padding: 2rem;
            li{
                cursor: auto;
                border-bottom: 1px solid #042d3a;
                margin: auto;
                width: 100%;
                border-radius: 0;
                display: flex;
                justify-content: center;
                a{

                    padding: 2px;
                    &:hover{
                        transform: scale(1.1);
                    }
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
    <NavMenuDtyle className='test'>
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