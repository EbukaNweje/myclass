import React, { useState } from 'react'
import"./HeaderStyle.css"
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";
import { useSelector } from 'react-redux';
const Header = () => {

    const [show, setShow] = useState(false);

    const cart  = useSelector((state)=>state.persisitedReducer.myCart )
    console.log(cart);

    const ShowAuth = () =>{
        setShow(true);
    }

  return (
    <div className='HeaderBody'>
        <article className='Wrapper'>
            <h4>COLO<span>SHOP</span></h4>
            <div className='NavUser'>
                <ul>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>PROMOTION</li>
                    <li>PAGES</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
                <div className='UserPath'>
                    <IoMdSearch className='Icon'/>
                    <FaUser className='Icon' onMouseOver={ShowAuth}/>

                    <div className='MyCartIcon'>
                    <IoCartSharp className='Icon'/>
                        <div className='NumberBox'>{cart.length}</div>
                    </div>

                    {show?<div className='AuthBox' onMouseLeave={()=> setShow(false)}>
                        <div className='AuthText br'><RiLoginBoxFill/> Sign in</div>
                        <div className='AuthText'><TiUserAdd/> Register</div>
                    </div>:null}
                </div>
            </div>
        </article>
    </div>
  )
}

export default Header