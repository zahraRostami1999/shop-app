import cover from "../assets/images/HomePage.jpeg";
import cover3 from "../assets/images/HomePage3.jpeg";
import cover4 from "../assets/images/HomePage4.jpeg";
import cover5 from "../assets/images/HomePage5.jpeg";
import cover6 from "../assets/images/HomePage6.jpeg";

function HomePage() {
  return (
    <>
      <div className="bg-white w-full h-screen flex justify-between pt-32 ">
        <h1 className="pl-20 pr-5">
          Welcome to our online clothing store, where style meets comfort! We
          are thrilled to have you here. Explore our carefully curated
          collection of trendy and timeless clothing items that cater to every
          taste and occasion. From casual wear to elegant outfits, we have
          something special for everyone. Our mission is to help you express
          your unique style with confidence and ease. Happy shopping, and thank
          you for choosing us to be a part of your fashion journey!
        </h1>
        <img className="bg-cover w-3/4 h-5/6 " src={cover5} />
      </div>
    </>
  );
}

export default HomePage;
