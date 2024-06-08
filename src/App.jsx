import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from './pages/Contact';
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/products" exact element={<Products />}/> 
        <Route path="/about" exact element={<About />}/> 
        <Route path="/contact" exact element={<Contact />}/> 
        <Route path="/product/:id" exact element={<ProductDetails />}/>
        <Route path="/signin" exact element={<LogIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
