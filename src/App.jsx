import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from './pages/Contact';
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
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
        <Route path="/product/:id" element={<ProductDetails />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
