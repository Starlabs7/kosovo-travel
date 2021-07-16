import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import "react-router-dom";


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

    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('./data/data.json');
        const items = await data.json();
        setItems(items.carousel);
    }

    return (
        <div className="carousel-wrapper">
            <h1>Destinations</h1>
            <Slider {...settings}>
                {items.map(item => (
                    <div className="card-wrapper" key={item.id}>
                        <div className="carousel-card">
                            <img src={item.image} />
                            <h3><a href="#">{item.title}</a></h3>
                            <p>{item.information}</p>
                            <button className="btn2"><a>Learn more!</a></button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
