import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getProducts } from "../services/api";
import { Link } from 'react-router-dom'; // If you're using react-router-dom

const Carousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((result) => setProducts(result))
            .catch((err) => console.error(err));
    }, []);

    const responsive = {
        300: { items: 2 },
        400: { items: 3 },
        1024: { items: 4 },
    };

    const items = products.map((item) => {
        return (
            <Link key={item.id} to={`/product/${item.id}`}> 
                <div className="">
                    <div className="">
                        <img className="" src={item.image} alt={item.title} />
                    </div>
                    <h1 className="">{item.title}</h1>
                    <p className="">$ {item.price}</p>
                </div>
            </Link>
        );
    });

    return (
        <div className='mt-44 mb-10'>
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
