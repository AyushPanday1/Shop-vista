import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, HomeOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-repeat: no-repeat;
  background-size: cover;  
`;

const Nav = styled.nav`
  position: fixed;
  padding: 13px;
  background-color:#cbe7ee;
  width: 100%;
  height:5vh;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  transition: 0.2s;
  box-shadow: -3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288);
`;


const Links = styled.div`
  a {
    font-size: 1rem;
    color: #000;
    font-weight: 500;
    padding: 10px 20px;
    position: relative;
  }
  a::after {
    content: '';
    width: 0%;
    height: 2px;
    background-color: #033a80;
    position: absolute;
    left: 0;
    bottom: -3px;
    transition: ease 0.4s;
  }
  a:hover::after {
    width: 100%;
  }
`;

const Name = styled.div`
flex:4;
display: flex;
margin-left:25px;
flex-direction:row;
align-items: left;
justify-content: left;
`;

const Img = styled.img`
width: 33px;
height: 33px;
margin-right:5px;
margin-top:3px;
`;

const Logo = styled.h3`
font-weight:600px;
font-size:30px;
color:teal;
text-decoration:Underline
`;

function Navbar() {

  const quantity = useSelector(state => state.cart.quantity)
  return (
    <HeaderWrapper>
      <Nav>
        <Name>
          <Img src="https://i.postimg.cc/bvMq1DTv/diamond-5370718.png" />
          <Logo> ShopVista</Logo>
        </Name>
        <Links>
          <Link to='/home'>
            <Badge color="primary">
              <HomeOutlined />
            </Badge>
          </Link>

          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>

          </Link>
        </Links>
      </Nav>
    </HeaderWrapper>
  );
}

export default Navbar;
