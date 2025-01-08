import React from 'react';
import CartPage from './CartPage';
import LoginPage from "./LoginPage";

const HandleCartPage: React.FC = () => {
    const isLoggedIn: string = localStorage.getItem("isLoggedIn") || "";
    return (
        <>
            {isLoggedIn ? <CartPage /> : <LoginPage />}
        </>
    );
}

export default HandleCartPage;