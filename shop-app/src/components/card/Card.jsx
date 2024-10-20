import {Link} from 'react-router-dom';

function Card() {
  return (
    <>
      <div className="border-slate-300 shadow-lg border col-span-3  my-10 mx-7 p-5 rounded-lg">
        <h2 className="text-center my-4 text-lg font-sans font-bold">Card Title</h2>
        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
        <p>Card Content</p>
        <Link to={`Product/${1}`}>View Details</Link>
      </div>
    </>
  );
}

export default Card;
