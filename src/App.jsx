import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className='relative'>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/products" exact element={<Products />}/> 
          <Route path="/about" exact element={<About />}/> 
          <Route path="/contact" exact element={<Contact />}/> 
        </Routes>
      </Router>
    </main>
  )
}

export default App
