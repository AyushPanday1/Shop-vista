import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom';

const Container = styled.div`
margin-top:25px;  
display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color:#cbe7ee;
  color:black
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Name = styled.div`
display: flex;
align-items: left;
justify-content: left;
`;

const Img =styled.img`
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

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-weight:800px;
  color:#033a80;
  text-decoration:Underline
 
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <>
    <Container>
      <Left>
        <Name>
        <Img src="https://i.postimg.cc/bvMq1DTv/diamond-5370718.png" />
        <Logo> ShopVista</Logo>
        </Name>
        <Desc>
        Welcome to ShopVista! We are your go-to destination for all things trendy and modern. Our mission is to bring you the latest in fashion, tech, home decor, and more, all at your fingertips. Join our community of savvy shoppers and discover a world of style and innovation!
        <br></br>Embrace the essence of the city and explore ShopVista today!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/home">Home</Link></ListItem>
          <ListItem><a href='http://github.com/AyushPanday1'>Github</a></ListItem>
          <ListItem><Link to='/products/MENS'>Man Fashion</Link></ListItem>
          <ListItem><a href='https://www.linkedin.com/in/ayush-panday-799b3120b/'>LinkedIn</a></ListItem>
          <ListItem><Link to='/products/Women'>Women Fashion</Link></ListItem>
          <ListItem><a href='https://www.instagram.com/ayushpanday__/'>Instagram</a></ListItem>
          <ListItem><Link to='/products/gadgets'>Gadgets</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Circuit 321001
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 7426883261
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> support@shopvista.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
   
    </>
  );
};

export default Footer;
