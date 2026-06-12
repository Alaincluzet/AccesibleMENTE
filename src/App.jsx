import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavbarComponent from "./components/layouts/NavBarComponent";

function App() {
  return (
    <BrowserRouter>
     <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;