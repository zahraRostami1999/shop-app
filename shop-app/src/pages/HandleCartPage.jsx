import React from 'react';
import CartPage from './CartPage';
import LoginPage from "./LoginPage";

const HandleCartPage = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
        <>
            {isLoggedIn ? <CartPage /> : <LoginPage />}
        </>
    );
}

export default HandleCartPage;