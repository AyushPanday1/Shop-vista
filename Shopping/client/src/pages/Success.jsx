import React from "react";
import Navbar from '../components/Navbar'
import Cart from './Cart'
import 'styled-components'
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(189, 189, 189, 0.8);
`;

const Container = styled.div`
position: fixed;
top: 50%;
left: 50%;
padding: 3rem;
border-radius: 0.5rem;
transform: translate(-50%, -50%);
max-width: 70rem;
background-color: #cbe7ee;
`;

const Heading = styled.h2`
text-decoration: underline;
text-align:center;
color: teal;
`;

const P = styled.p`
margin-top: 15px;
font-size:medium;
color:cornflowerblue
`;

const Img = styled.img`
background-color: teal;
width: 60px;
height: 60px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto 1rem;
`;

const Button = styled.button`
width:40%;
display: block;
margin: 0 auto;
justify-content: center;
padding: 0.6rem;
margin-top: 1.5rem;
border: none;
border-radius: 0.3rem;
background-color: #0071c2;
color: #ebf3ff
`;

const Success = () => {
  return (

    <>
    <Navbar />
      <Wrapper>
        <Container>
          <Img src='https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?w=740&t=st=1691409190~exp=1691409790~hmac=b9194a4664555bdcb1e6b1cdee41915cdc5c23318b45cfcc4a23debfd3134058' />
          <Heading>Payment Successful!!</Heading>
          <P>Congratulations! Your order has been confirmed. <br></br> Shop more to earn discounts and coupons!</P>

          <Link to='/home'><Button className="reserve">Shop more</Button></Link>
        </Container>
      </Wrapper>
      <Cart />
    </>
  );
};

export default Success;
