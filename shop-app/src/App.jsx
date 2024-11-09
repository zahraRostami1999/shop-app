import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListPage from "./pages/ProductsListPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/Page404";
import ProductPage from "./pages/ProductPage";
import Header from "./components/header/Header";

import PrivateRoute from "./components/privateRoute/PrivateRoute";

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
          <Route element={<PrivateRoute />}>
            <Route path="/Checkout"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
