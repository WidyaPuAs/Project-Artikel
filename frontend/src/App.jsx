import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbarguest from "./components/layout/navbar/navbarguest";
import Dashboard from "./pages/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbarguest />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
