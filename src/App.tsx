import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Lojas from "./pages/Lojas";

export default function App() {
  return (
    
    <BrowserRouter basename="/santo-sonho-website/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/lojas" element={<Lojas />} />
      </Routes>
    </BrowserRouter>
  );
}