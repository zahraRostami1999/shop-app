import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getProducts } from "../services/api";
import { Link } from 'react-router-dom'; 

const Carousel = () => {
    const [products, setProducts] = useState([]);  

    useEffect(() => {
        getProducts()
            .then((result) => setProducts(result))
            .catch((err) => console.error(err));        
    }, []);  

    const responsive = {
        300: { items: 1 },
        400: { items: 3 },
        1024: { items: 3 },
    };

    const filterproducts = products.filter((product) => product.id > 4 && product.id < 13);

    const items = filterproducts.map((item) => {        
        return (
            <Link key={item.id} to={`/${item.id}`}> 
                <div className="w-5/6 md:w-2/3 lg:w-2/3 xl:w-2/3 p-4 flex flex-col items-center rounded-lg shadow-md bg-zinc-50 hover:bg-zinc-100 transition-shadow duration-300 px-5">
                    <div className="h-44 w-full flex justify-center items-center">
                        <img className="h-full max-w-full object-contain" src={item.image} alt={item.title} />
                    </div>
                    <h1 className="block text-center h-20 text-base lg:text-lg xl:text-lg font-medium mt-2 line-clamp-2">{item.title}</h1>
                    <p className="block text-center text-green-700 font-semibold mt-1">$ {item.price}</p>
                </div>
            </Link>
        );
    });
    

    return (
        <div className='lg:mt-10 md:mt-10 mt-16 mb-10 w-full'>
            <div className=''>
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={2000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    autoPlay
                    items={items}
                />
            </div>
        </div>
    );
};

export default Carousel;