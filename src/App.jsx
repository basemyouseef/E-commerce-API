import { Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonHeader from "./Componetes/Header/ButtonHeader";
import TopHeader from "./Componetes/Header/TopHeader";
import Home from "./Pages/Home/Home";
import Detalies from "./Pages/ProductDetails/Detalies";
import Cart from "./Pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./Componetes/ScrollTop";
import { AnimatePresence } from "framer-motion";
import CatogryPage from "./Pages/CatogryPage/CatogryPage";
import Search from "./Pages/Search/Search";
import Favoirt from "./Pages/Favoirt/Favoirt";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
function App() {
  return (
    <>
      <header>
        <TopHeader />
        <ButtonHeader />
      </header>
      <ScrollTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            padding: "14px",
          },
        }}
      />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detalies />}></Route>
          <Route path="/category/:catogry" element={<CatogryPage />} />
          <Route path="/Favoirt" element={<Favoirt />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/LoginRegister" element={<LoginRegister />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
