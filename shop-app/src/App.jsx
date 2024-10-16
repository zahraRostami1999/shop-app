import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
