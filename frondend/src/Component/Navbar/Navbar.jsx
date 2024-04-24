import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"

import logo from '../Assets/logo1.png'
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/check.png'


const Navbar = () => {

const [menu,setMenu]= useState("shop");
const{getTotalCartItem}=useContext(ShopContext);
const menuRef = useRef();
const dropdown_toggle = (e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');
}

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo"  style={{ width: '120px', height: 'auto' }} />
        <p >HM shop</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" style={{ width: '50px', height: 'auto' }} />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color:'white'}} to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none', color:'white'}} to='/men'>men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none', color:'white'}} to='/women'>women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color:'white'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/loginsingnup'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar
