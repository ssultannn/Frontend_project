import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "./components/contactus/Contactus";
import Products from "./components/products/Products";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Onsale from "./components/onsale/Onsale";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import Games from "./components/games/Games";
import Gamedetail from "./components/gamedetail/Gamedetail";
import Alldetails from "./components/alldetails/Alldetails";
import Accessoriesdetails from "./components/accessoriesdetails/Accessoriesdetails";
import Sellersdetails from "./components/sellersdetails/Sellersdetails";
import Consolesdetails from "./components/consolesdetails/Consolesdetails";
import Controllersdetails from "./components/controllersdetails/Controllersdetails";
import Onsaledetails from "./components/onsaledetails/Onsaledetails";
import Carts from "./components/carts/Carts";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/*" element={<Products />} />
            <Route path="product/%20/onsale" element={<Onsale />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:index" element={<Gamedetail />} />
            <Route path="/all/:index" element={<Alldetails />} />
            <Route
              path="/accessories/:index"
              element={<Accessoriesdetails />}
            />
            <Route path="/sellers/:index" element={<Sellersdetails />} />
            <Route path="/consoles/:index" element={<Consolesdetails />} />
            <Route
              path="/controllers/:index"
              element={<Controllersdetails />}
            />
            <Route path="/onsale/:index" element={<Onsaledetails />} />
            <Route path="/cart" element={<Carts />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
