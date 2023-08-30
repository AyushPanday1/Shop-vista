import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Metadata from '../components/Metadata'
import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/living-room-with-sofa-plant-wall_398492-3887.jpg?w=740")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #cbe7ee;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom:15px;
  text-align:center;
  font-weight: 500;
  color:#033a80;
  text-decoration:underline;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Text = styled.h3`
margin: 5px 0px;
text-align:center;
color:#033a80;
font-size: 14px;
text-decoration: underline;
cursor: pointer;
`;

const Linking = styled(Link)`
  margin: 5px 0px;
  text-align:center;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {


  const [formData, setFormData] = useState({
    username: '',
    Password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://ser-cytv.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        alert("Logged In succesfully")
        window.location.replace("/home")
      })
      .then((data) => {
        // Handle the successful login response here
        console.log(data);
      })
      .catch((error) => {
        // Handle error if the login API call fails
        setError('Invalid email or password. Please try again.');
        console.error('Error:', error);
      });
  };


  return (
    <>
      <Metadata title="LogIn | ShopVista" />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <Input type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder="Password" />
            <Button type="submit">
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Linking to='/register'>DON'T HAVE AN ACCOUNT?</Linking>
            <Text>(Test Credentials : User_test, Password@123)</Text>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
