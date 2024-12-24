// SliderCard.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../../../public/data.json";
import "../../../App.css";

const SliderCard = () => {
    const settings = {
        infinite: true,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 5,
        arrows: false,
        speed: 500,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            }
        ],

    };

    return (
        <div className="w-full px-4 text-white">
            <Slider {...settings}>
                {Data.game.map((item) => (
                    <div key={item.id} className="slider-card">
                        <div className="rounded-xl mt-2 max-sm:p-1.5 sm:p-1 md:p-1 lg:p-3 text-center flex justify-center items-center flex-col transition-all duration-300 ease-in-out">
                            <img
                                src={item.img}
                                alt={item.nama}
                                className="max-sm:w-full sm:w-3/5 md:w-full max-sm:h-40 sm:h-44 md:h-52 lg:h-64 xl:h-80 2xl:h-108 object-cover mb-2  max-sm:rounded-xl sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-3xl"
                            />
                            <h3 className="font-semibold max-sm:text-xxs sm:text-xs md:text-sm lg:text-base">{item.nama}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderCard;