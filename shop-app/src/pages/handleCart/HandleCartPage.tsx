import React from 'react';
import {CartPage, LoginPage} from "../index";

const HandleCartPage: React.FC = () => {
    const isLoggedIn: string = localStorage.getItem("isLoggedIn") || "";
    return (
        <>
            {isLoggedIn ? <CartPage /> : <LoginPage />}
        </>
    );
}

export default HandleCartPage;