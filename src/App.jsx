import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/layouts/FooterComponent";
import Home from "./pages/Home";
import NavbarComponent from "./components/layouts/NavBarComponent";
import AboutUs from "./pages/AboutUs";
import Professionals from "./pages/Professionals";
import UserSignUp from "./pages/UserSignUp";
function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <NavbarComponent />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/profesionales" element={<Professionals />} />
            <Route path="/registro" element={<UserSignUp />} />
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
