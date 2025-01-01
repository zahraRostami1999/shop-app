import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const LazyCart = React.lazy(() => import("./pages/CartPage"));
const LazyUndefined = React.lazy(() => import("./pages/Page404"));
const LazyCheckout = React.lazy(() => import("./pages/CheckoutPage"));
const LazyProduct = React.lazy(() => import("./pages/ProductPage"));
const LazyLogin = React.lazy(() => import("./pages/LoginPage"));
const LazyHandleCart = React.lazy(() => import("./pages/HandleCartPage"));
const LazyHome = React.lazy(() => import("./pages/HomePage"));
const LazyProducts = React.lazy(() => import("./pages/ProductsListPage"));

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading">
                <LazyHome />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="*"
            element={
              <React.Suspense fallback="Loading">
                <LazyUndefined />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/Checkout"
            element={
              <React.Suspense fallback="Loading">
                <LazyCheckout />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/:id"
            element={
              <React.Suspense fallback="Loading">
                <LazyProduct />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/Login"
            element={
              <React.Suspense fallback="Loading">
                <LazyLogin />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/Handle"
            element={
              <React.Suspense fallback="Loading">
                <LazyHandleCart />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/Cart"
            element={
              <React.Suspense fallback="Loading">
                <LazyCart />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/Products"
            element={
              <React.Suspense fallback="Loading">
                <LazyProducts />
              </React.Suspense>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
