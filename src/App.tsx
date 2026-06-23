import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Lojas from "./pages/Lojas";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter basename="/santo-sonho-website/">
      <Routes>
        {/* 👇 LAYOUT GLOBAL */}
        <Route element={<SiteLayout />}>
          
          {/* páginas dentro do layout */}
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<div>Not Found</div>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}