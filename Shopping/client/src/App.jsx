import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/success" element={<Success/>}/>
      <Route exact path="/products/:category" element={<ProductList/>}/>
      <Route exact path="/product/:id" element={<Product/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
};

export default App;
