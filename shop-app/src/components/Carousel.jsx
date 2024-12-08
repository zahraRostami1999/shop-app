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
        400: { items: 2 },
        1024: { items: 3 },
    };

    const filterproducts = products.filter((product) => product.id > 4 && product.id < 14);

    const items = filterproducts.map((item) => {        
        return (
            <Link key={item.id} to={`/product/${item.id}`}> 
                <div className="">
                    <div className="">
                        <img className="" src={item.image} />
                    </div>
                    <h1 className="">{item.title}</h1>
                    <p className="">$ {item.price}</p>
                </div>
            </Link>
        );
    });

    return (
        <div className='mt-44 mb-10 w-full'>
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
