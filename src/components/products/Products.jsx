import { Route, Routes } from "react-router-dom";
import All from "../all/All";
import Sellers from "../sellers/Sellers";
import Consoles from "../consoles/Consoles";
import Controllers from "../controllers/Controllers";
import Games from "../games/Games";
import Onsale from "../onsale/Onsale";
import LayoutProducts from "../layout_products/LayoutProducts";
import React from "react";
import Accessories from "../accessories/Accessories";

function Products() {
  return (
    <React.Fragment>
      <LayoutProducts />
      <Routes>
        <Route index element={<All />} />
        <Route path=" /accessories" element={<Accessories />} />
        <Route path=" /sellers" element={<Sellers />} />
        <Route path=" /consoles" element={<Consoles />} />
        <Route path=" /controllers" element={<Controllers />} />
        <Route path=" /games" element={<Games />} />
        <Route path=" /onsale" element={<Onsale />} />
        <Route path=" /*" element={<All />} />
      </Routes>
    </React.Fragment>
  );
}

export default Products;
