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
               />

               <Route
                  path="/Checkout"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyCheckout />
                     </React.Suspense>
                  }
               />

               <Route
                  path="/Login"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyLogin />
                     </React.Suspense>
                  }
               />

               <Route
                  path="/Handle"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyHandleCart />
                     </React.Suspense>
                  }
               />

               <Route
                  path="/Cart"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyCart />
                     </React.Suspense>
                  }
               />

               <Route
                  path="/Products"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyProducts />
                     </React.Suspense>
                  }
               />

               <Route
                  path="/SignUp"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazySignUp />
                     </React.Suspense>
                  }
               />

               <Route
                  path="/product/:id"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyProduct />
                     </React.Suspense>
                  }
               />

               <Route
                  path="*"
                  element={
                     <React.Suspense fallback="Loading">
                        <LazyUndefined />
                     </React.Suspense>
                  }
               />
            </Routes>

            <Footer />
         </BrowserRouter>
      </>
   );
};

export default App;
