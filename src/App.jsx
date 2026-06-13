import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/layouts/FooterComponent";
import Home from "./pages/Home";
import NavbarComponent from "./components/layouts/NavBarComponent";

function App() {
  return (
    <BrowserRouter>
     <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     <FooterComponent/>
    </BrowserRouter>
    
  );
}

export default App;