import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/layouts/FooterComponent";
import Home from "./pages/Home";
import NavbarComponent from "./components/layouts/NavBarComponent";
import AboutUs from "./pages/AboutUs";
import Professionals from "./pages/Professionals";
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/profesionales" element={<Professionals />} />
      </Routes>
     <FooterComponent/>
    </BrowserRouter>
    
  );
}

export default App;
