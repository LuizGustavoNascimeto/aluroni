import Menu from "components/Menu";
import React from "react";
import PaginaPadrao from "components/PaginaPadrao";
import Cardapio from "pages/Cardapio";
import Home from "pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sobre from "pages/Sobre";
import Rodape from "components/Rodape";
import NotFound from "pages/NotFound";
import Pratos from "pages/Pratos";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="prato/:id" element={<Pratos />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    </main>
  );
}
