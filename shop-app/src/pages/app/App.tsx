import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../../components";
const LazyCart = React.lazy(() => import("../cart/CartPage"));
const LazyUndefined = React.lazy(() => import("../404/Page404"));
const LazyCheckout = React.lazy(() => import("../checkout/CheckoutPage"));
const LazyProduct = React.lazy(() => import("../product/ProductPage"));
const LazyLogin = React.lazy(() => import("../login/LoginPage"));
const LazyHandleCart = React.lazy(() => import("../handleCart/HandleCartPage"));
const LazyHome = React.lazy(() => import("../home/HomePage"));
const LazyProducts = React.lazy(() => import("../productList/ProductsListPage"));
const LazySignUp = React.lazy(() => import("../signUp/SignUp"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <React.Suspense
            fallback={
              <div className="flex justify-center items-center h-full min-h-[60vh]">
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/Checkout" element={<LazyCheckout />} />
              <Route path="/Login" element={<LazyLogin />} />
              <Route path="/Handle" element={<LazyHandleCart />} />
              <Route path="/Cart" element={<LazyCart />} />
              <Route path="/Products" element={<LazyProducts />} />
              <Route path="/SignUp" element={<LazySignUp />} />
              <Route path="/product/:id" element={<LazyProduct />} />
              <Route path="*" element={<LazyUndefined />} />
            </Routes>
          </React.Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};


export default App;
