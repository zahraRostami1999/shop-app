import CartPage from './CartPage';
import LoginPage from "./LoginPage";
import { useSelector } from 'react-redux';

const HandleCartPage = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    return (
        <>
            {isLoggedIn ? <CartPage /> : <LoginPage />}
        </>
    );
}

export default HandleCartPage;