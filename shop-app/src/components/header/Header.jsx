import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="flex justify-between text-slate-700 bg-red-400 p-5 text-center font-mono font-extrabold text-3xl">
        <h1>WELLCOME TO YOUR SHOP</h1>
        <div className="flex">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="lg"
        />
        <div className="bg-red-600 rounded-3xl text-xs font-thin h-5 px-2 py-0.5 inline -translate-x-3 -translate-y-2 cursor-pointer">0</div>
        </div>

      </div>
    </>
  );
}

export default Header;
