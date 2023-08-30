import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Items";
import Sliders from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sliders />
      <Categories />
      <img src='https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg'/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
