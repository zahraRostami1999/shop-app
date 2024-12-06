import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListPage from "./pages/ProductsListPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/Page404";
import ProductPage from "./pages/ProductPage";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/Products" element={<ProductsListPage />}></Route>
          <Route path="/Product/:id" element={<ProductPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
          <Route path="/Checkout" element={<CheckoutPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
