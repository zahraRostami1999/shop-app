import cover from "../assets/images/HomePage.jpeg";

function HomePage() {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex justify-between pt-32 px-10 ">
        <div className="pr-16 font-Poppins ">
          <h1 className="mt-20 mb-10 text-2xl font-bold text-slate-950-900">
            Welcome to SportyFit sports store!
          </h1>
          <p className="my-12 text-xl font-semibold text-gray-700">
            <p>
              Find the best in sportswear and fashion here! From comfortable
              t-shirts and functional pants to yoga and running apparel. With
              brands like Nike, Adidas, Puma, and Reebok, you can always look
              your best in style and performance
            </p>
            <p className="my-10">
              We believe that every person has a unique style, and that with us,
              you can find that style in our collection.
            </p>
            <h3>
            Buy now and enjoy the sport!
            </h3>
          </p>
        </div>

        <img className="bg-cover w-4/6 h-5/6 " src={cover} />
      </div>
    </>
  );
}

export default HomePage;
