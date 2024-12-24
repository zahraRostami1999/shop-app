import cover from "../assets/images/HomePage.png";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
function HomePage() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-wrap justify-between lg:pt-20 md:pt-24 pt-16 lg:px-10 px-2">
        <div className="w-full mt-10">
          <h1 className="lg:mb-5 mb-2 text-lg font-semibold lg:text-3xl text-center md:text-3xl lg:font-bold md:font-bold text-gray-800">
            Welcome to ChicMarket – Your Shop for Fashion, Electronics, and More!
          </h1>
        </div>

        <div className=" h-full w-full">
          <img className="bg-cover lg:w-2/3 md:w-5/6 lg:h-5/6 md:h-5/6 w-11/12 mx-auto" src={cover} />
        </div>
        <div className="w-full font-Poppins lg:pl-10 pl-0 pt-10 text-left">

          <p className="lg:my-20 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 px-5">
            <p>
              Discover a world of endless possibilities at ChicMarket, where we bring you the finest selection of products to suit every lifestyle and need. Whether you’re looking for stylish apparel, cutting-edge electronics, or timeless jewelry, we’ve got it all under one roof!
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 ">
              Fashion for Every Occasion:
              Explore our exclusive collection of women’s and men’s clothing, featuring the latest trends in casual wear, formal attire, and activewear. From chic dresses and tailored suits to comfortable t-shirts and cozy loungewear, redefine your wardrobe with styles that inspire confidence and individuality.
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 ">
              Tech That Powers Your Life:
              Stay ahead of the curve with our premium range of electronics. From high-performance hard drives and sleek laptops to smart TVs and gadgets that make everyday life easier, we bring technology closer to you.
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 ">
              Jewelry That Dazzles:
              Elevate your look with our stunning array of jewelry. From elegant necklaces and bracelets to statement rings and earrings, our timeless pieces are perfect for celebrating life’s special moments or adding sparkle to your everyday ensemble.
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 ">
              At ChicMarket, we’re committed to delivering quality, variety, and convenience. Whether you're shopping for yourself or looking for the perfect gift, we’ve curated something extraordinary just for you.
            </p>
            <p className="lg:my-20 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 ">
              Shop with us today and experience the difference!
            </p>
          </p>
          <div className="w-full">
            <Carousel />
          </div>
          <Link to="/Products">
            <div className="w-full lg:w-full md-2/3 lg:my-16 md:my-10 my-10 flex justify-center">
              <button className="bg-gold lg:w-2/5 md:w-2/5 w-5/6 py-3 rounded-lg lg:font-semibold md:font-semibold lg:text-lg md:text-lg text-xs shadow-lg shadow-slate-400 text-black hover:scale-105 transition duration-300">
                See More Products
              </button>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
}

export default HomePage;
