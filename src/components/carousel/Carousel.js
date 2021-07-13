import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from "../../Images/3.jpg"
import "./carousel.css"


function Carousel() {
    let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: true,
        touchThreshold: 15,
    }
    return (
        <div className="carousel-wrapper">
            <h1>Destinations</h1>
            <Slider {...settings}>
                <div className="card-wrapper">
                    <div className="carousel-card">
                        <img src={img3} />
                        <h3><a href="#">The Accursed Mountains</a></h3>
                        <p>The Accursed Mountains make for some of Kosovo’s most dramatic landscapes. The ascent is punctuated by jagged peaks and steep valleys. </p>
                        <button className="btn2"><a>Learn more!</a></button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="carousel-card">
                        <img src={img3} />
                        <h3><a href="#">The Accursed Mountains</a></h3>
                        <p>The Accursed Mountains make for some of Kosovo’s most dramatic landscapes. The ascent is punctuated by jagged peaks and steep valleys. </p>
                        <button className="btn2"><a>Learn more!</a></button>
                    </div>
                </div> 
                <div className="card-wrapper">
                   <div className="carousel-card">
                        <img src={img3} />
                        <h3><a href="#">The Accursed Mountains</a></h3>
                        <p>The Accursed Mountains make for some of Kosovo’s most dramatic landscapes. The ascent is punctuated by jagged peaks and steep valleys. </p>
                        <button className="btn2"><a>Learn more!</a></button>
                    </div> 
                </div>
                <div className="card-wrapper">
                    <div className="carousel-card">
                        <img src={img3} />
                        <h3><a href="#">The Accursed Mountains</a></h3>
                        <p>The Accursed Mountains make for some of Kosovo’s most dramatic landscapes. The ascent is punctuated by jagged peaks and steep valleys. </p>
                        <button className="btn2"><a>Learn more!</a></button>
                    </div>
                </div>
                    
            </Slider>
        </div>
    )
}

export default Carousel
