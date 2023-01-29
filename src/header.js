import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const Navbar = () =>{
  return(
    <>
      <Nav>
        <Bars/>
        <NavMenu>
          <NavLink to ='/' activeStyle>Home</NavLink>
          <NavLink to ='/about' activeStyle>About</NavLink>
          <NavLink to ='/members' activeStyle>Members</NavLink>
          <NavLink to ='/resources' activeStyle>Resources</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to ='/register'>Register</NavBtnLink>
        </NavBtn>
      </Nav>  
    </>
  )
}
export default Navbar