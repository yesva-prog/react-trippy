import logo from './logo.svg';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import Signup from './Routes/Signup';
import './App.css';


function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/service" element={<Service />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/signup"  element={<Signup/>} />
    </Routes>
    
    
   </>
  );
}

export default App;
