import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListPage from "./pages/ProductsListPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/Page404";
import ProductPage from "./pages/ProductPage";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/Products" element={<ProductsListPage />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
          <Route path="/Product/:id" element={<ProductPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
