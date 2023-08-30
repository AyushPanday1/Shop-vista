import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Delivery from '../Assets/free delivery.png'
import Verified from '../Assets/verified.webp'
import Payment from '../Assets/payment.webp'
import Replace from '../Assets/Replace.webp'


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 800;
  text-decoration:underline;
  color:#033a80;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  color:light violet;
  font-size: 35px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  width:60px;
  padding:5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Descripton = styled.div`
display:flex;
padding:25px;
margin-top:20px;
`;

const EmptyImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  margin-bottom:10px;
`;

const TaglineContainer = styled.div`
  display: grid;
  align-items: center;
  margin-left:10px;
  margin:auto;
  &:first-child {
    margin-left: -10px; // No left margin for the first container
  }
`;

const TaglineText = styled.span`
  font-size: 14px;
  font-weight:500px;
  color: black;
  text-align:center;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  margin-top:20px;
  width:100%;
  height:45px;
  color:green;
  font-weight: 1000;

  &:hover {
    background-color: #f8f4f4;
  }
`;



const Loading =styled.div`
font-weight:bold;
font-size: 35px;
margin-top: 100px;
margin-bottom: 100px;
font-color: #003580;
justify-content: center;
text-align: center;
padding: 20px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("api/products/find/" + id);
        setProduct(res.data);
        setLoading(false)
      } catch { }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  if(loading){
    return (<Loading>Loading...please wait for a while ⌛️</Loading>)
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>Price: $ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <FilterTitle>Qty: .</FilterTitle>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleClick}>ADD TO CART</Button>

          <Descripton>
            <TaglineContainer>
              <EmptyImage src={Replace} alt="10 Days Return" />
              <TaglineText>10 Days<br></br> Return</TaglineText>
            </TaglineContainer>
            <TaglineContainer>
              <EmptyImage src={Verified} alt="ShopVista Verified" />
              <TaglineText>ShopVista <br></br>Verified</TaglineText>
            </TaglineContainer>
            <TaglineContainer>
              <EmptyImage src={Delivery} alt="Free Shipping" />
              <TaglineText>Free<br></br> Shipping</TaglineText>
            </TaglineContainer>
            <TaglineContainer>
              <EmptyImage src={Payment} alt="Secure Payment" />
              <TaglineText>Secure<br></br> Payment</TaglineText>
            </TaglineContainer>
          </Descripton>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
