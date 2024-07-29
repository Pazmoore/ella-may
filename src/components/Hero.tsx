'use client'
import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    var settings ={
        dots:true,
        infinte:true,
        slidesToShow:1,
        autoplay:true,
        pauseOrHover:false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-3.jpg",
            title:"Trending Items",
            mainTitle: "WOWEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/banner-4.jpg",
            title:"Trending Accessories",
            mainTitle: "MORDERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/banner-1.jpg",
            title:"Sale Offer",
            mainTitle: "NEW FASHION SUPER SALE",
            price: "$30",
        },
    ];
  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => <Slide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                />)}
            </Slider>
        </div>
    </div>
  )
}

export default Hero