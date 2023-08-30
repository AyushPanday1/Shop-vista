import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Logo = styled.div`
font-size:30px;
font-weight:600px;
padding-top:25px;
color:Green;
text-align:center;
`;

const Heading = styled.div`
font-size:20px;
font-weight:400px;
padding:25px;
color:Gray;
text-align:center;
`;

const ALinKing= styled(Link)`
color:teal;
`;


const BLinKing= styled(Link)`
color:gray;
`;

const Loading =styled.div`
font-weight:bold;
font-size: 35px;
margin-top: 100px;
margin-bottom: 100px;
color: #003580;
font-color:#033a80;
justify-content: center;
text-align: center;
padding: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ser-cytv.onrender.com/api/products/categories?categoryNames=${cat}`
            : "https://ser-cytv.onrender.com/api/products"
        );
        setProducts(res.data);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setError(error);

      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  
  if (loading) {
    return <Loading>Loading... Please wait for a while ⌛️</Loading>;
  }
  return (
   <>
    <Logo><ALinKing to='/products/gadgets'>Explore by Technology</ALinKing></Logo>
    <Heading><BLinKing to='/products/gadgets'>Shop latest products</BLinKing></Heading>
   <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 4)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
    <Logo><ALinKing to='/products/footwear'>Footwear Fashion Finds</ALinKing></Logo>
    <Heading><BLinKing to='/products/footwear'>Step into Style</BLinKing></Heading>
     <Container>
     {cat
       ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
       : products
           .slice(8, 12)
           .map((item) => <Product item={item} key={item.id} />)}
   </Container>
   <Logo><ALinKing to='/products/suggested'>Suggested for you</ALinKing></Logo>
    <Heading><BLinKing to='/products/suggested'>Personalized Picks Just for You</BLinKing></Heading>
     <Container>
     {cat
       ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
       : products
           .slice(12,16)
           .map((item) => <Product item={item} key={item.id} />)}
   </Container>
   <Logo><ALinKing to='/products/interest'>You may also Like</ALinKing></Logo>
    <Heading><BLinKing to='/products/interest'>Based on your interest</BLinKing></Heading>
     <Container>
     {cat
       ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
       : products
           .slice(16,20)
           .map((item) => <Product item={item} key={item.id} />)}
   </Container>
   <Logo>Top Discounted Products</Logo>
    <Heading>Hot deal on products</Heading>
     <Container>
     {cat
       ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
       : products
           .slice(20,24)
           .map((item) => <Product item={item} key={item.id} />)}
   </Container>
   </>
  );
};

export default Products;
