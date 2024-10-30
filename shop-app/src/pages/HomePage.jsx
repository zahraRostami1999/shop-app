import cover from "../assets/images/HomePage.jpeg";

function HomePage() {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex justify-between pt-32 px-10 ">
        <div className=" font-Poppins pl-10">
          <h1 className="mt-24 mb-10 text-3xl font-bold text-gray-800">
            Welcome to SportyFit sports store!
          </h1>
          <p className="my-14 text-xl font-semibold text-gray-700">
            <p>
              Find the best in sportswear and fashion here! From comfortable
              t-shirts and functional pants to yoga and running apparel.
            </p>
            <p className="my-5">
              With brands like Nike, Adidas, Puma, and Reebok, you can always
              look your best in style and performance
            </p>
          </p>
          <div className="w-full my-16">
            <button className="bg-orange-500 w-5/6 py-3 rounded-lg font-semibold text-lg shadow-lg shadow-slate-300 text-white hover:scale-105 transition duration-300">Buy now and enjoy the sport</button>
          </div>
        </div>

        <img className="bg-cover w-4/6 h-5/6 " src={cover} />
      </div>
    </>
  );
}

export default HomePage;
