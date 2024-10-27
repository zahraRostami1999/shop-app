import cover from "../assets/images/HomePage5.jpeg";

function HomePage() {
  return (
    <>
      <div className="bg-white w-full h-screen flex justify-between pt-32 ">
        <div className="pl-10 pr-5 font-sans ">
          <h1 className="my-10 mb-20 text-2xl font-bold text-zinc-700">Welcome to Moonlit Couture🌜</h1>
          <p className="my-8 text-xl font-semibold text-gray-700">
            <h2 className="my-5">
              Moonlit Couture is a boutique clothing brand, founded in 2024.
            </h2>
            <p>
              Located in the heart of Paris, we strive to create a unique and
              stylish lifestyle for our customers. Our mission is to bring the
              beauty and comfort of fashion to your doorstep, making it easy to
              feel your way through the world of clothing.
            </p>
            <p className="my-20">
              We believe that every person has a unique style, and that with us,
              you can find that style in our collection.
            </p>
          </p>
        </div>

        <img className="bg-cover w-4/6 h-5/6 " src={cover} />
      </div>
    </>
  );
}

export default HomePage;
