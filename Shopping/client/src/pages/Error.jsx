import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const ContentContainer = styled.div`
  border: 1px solid #ddd; /* Add a light border */
  border-radius: 4px; /* Optional: Add border radius for a rounded look */
  padding: 25px; /* Add padding to create some space between border and content */
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 2rem;
  color: #666;
`;

const Messages = styled.p`
font-size: 1.5rem;
margin-top:10px;
color: #666;
`;  

const Button = styled.button`
width:100%;
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


const Error = () => {
  return (
    <Container>
        <ContentContainer>
      <Title>404</Title>
      <Message>Page not found!</Message>
      <Messages>(Looks Like this Page doesn't exist on ShopVista)</Messages>
      <Link to='/home'><Button className="reserve">Go to homepage</Button></Link>
      </ContentContainer>
    </Container>
  );
};

export default Error;
